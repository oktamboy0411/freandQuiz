import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button } from "@material-tailwind/react";
import { auth } from "../config/firebase";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDocs, query, where } from "firebase/firestore";
import { userCollection } from "../config/collections";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/reducers/userReducer";
import { setLoader } from "../redux/reducers/loaderReducer";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import ModalAlert from "../components/common/ModalAlert";
import ModalPrompt from "../components/common/ModalPrompt";
import { FaCircleCheck } from "react-icons/fa6";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [openPrompt, setOpenPrompt] = useState(false);
  const [eye, setEye] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleOpen = () => setOpen((prev) => !prev);
  const handleOpenPrompt = () => setOpenPrompt((prev) => !prev);

  const signIn = async () => {
    dispatch(setLoader(true));

    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      const q = query(userCollection, where("userId", "==", data.user.uid));
      const res = await getDocs(q);
      const userData = res.docs.map((item) => item.data());
      dispatch(updateUser(userData[0]));
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setEmail("");
      setPassword("");
      handleOpen();
    } finally {
      dispatch(setLoader(false));
    }
  };

  const sendEmail = async (text: string) => {
    try {
      await sendPasswordResetEmail(auth, text);
      setAlert(true);
      setTimeout(() => setAlert(false), 3000);
    } catch (error) {
      console.error(error);
      handleOpen();
    }
  };

  const togglePasswordVisibility = () => setEye((prev) => !prev);

  return (
    <div className="container mx-auto p-8 flex">
      <ModalAlert
        handleOpen={handleOpen}
        open={open}
        title={
          <>
            sizda email yoki passwordda xatolik bor <br /> ular to'g'ri bo'lsa
            internet tarmog'ini tekshiring
          </>
        }
      />
      <ModalPrompt
        open={openPrompt}
        handleOpen={handleOpenPrompt}
        title={<>Enter your email</>}
        setData={sendEmail}
      />
      <div className="max-w-md w-full mx-auto">
        <h1 className="text-4xl text-center mb-12 font-thin">Sign In</h1>
        <Alert
          open={alert}
          icon={<FaCircleCheck className="w-6 h-6" />}
          animate={{
            mount: { y: 0 },
            unmount: { y: 100 },
          }}
          className="rounded-none border-l-4 border-[#2ec946] bg-[#2ec946]/10 font-medium text-[#2ec946] fixed w-96 bottom-4 left-4"
        >
          A simple alert for showing message.
        </Alert>
        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
          <div className="p-8">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Email
              </label>

              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
              />
            </div>

            <div className="mb-5 relative">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Password
              </label>

              <input
                id="password"
                type={eye ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
              />
              <button
                className=" absolute right-3 bottom-3"
                onClick={togglePasswordVisibility}
              >
                {eye ? (
                  <IoIosEye className="w-7 h-7" />
                ) : (
                  <IoIosEyeOff className="w-7 h-7" />
                )}
              </button>
            </div>

            <Button
              onClick={signIn}
              className="w-full p-3 mt-4 bg-pinkColor text-white rounded shadow"
            >
              Sign In
            </Button>
          </div>

          <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
            <Link to="/sign-up" className="font-medium text-indigo-500">
              Create account
            </Link>

            <button onClick={handleOpenPrompt} className="text-gray-600">
              Forgot password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
