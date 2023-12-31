import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { addDoc } from "firebase/firestore";
import { userCollection } from "../config/collections";
import { userType } from "../types/userType";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/reducers/userReducer";
import Modal from "../components/common/ModalAlert";
import { setLoader } from "../redux/reducers/loaderReducer";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [eye, setEye] = useState(false);

  const handleOpen = () => setOpen((prev) => !prev);

  const signUp = async () => {
    dispatch(setLoader(true));

    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);
      const newData: userType = {
        userId: data.user.uid,
        userLogo: "",
        userName: email,
        quizes: [],
      };
      await addDoc(userCollection, newData);
      dispatch(updateUser(newData));
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setEmail("");
      setPassword("");
      handleOpen();
    } finally {
      dispatch(setLoader(false));
    }
  };

  return (
    <div className="container mx-auto p-8 flex">
      <Modal
        open={open}
        handleOpen={handleOpen}
        title={
          <>
            bu email oldindan ro'yxatdan o'tgan bo'lishi mumkun
            <br /> agar unday bo'lmasa internet tarmog'ini tekshiring
          </>
        }
      />
      <div className="max-w-md w-full mx-auto">
        <h1 className="text-4xl text-center mb-12 font-thin">Sign Up</h1>
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
                onClick={() => setEye((prev) => !prev)}
              >
                {eye ? (
                  <IoIosEye className="w-7 h-7" />
                ) : (
                  <IoIosEyeOff className="w-7 h-7" />
                )}
              </button>
            </div>
            <Button
              onClick={signUp}
              className="w-full p-3 mt-4 bg-pinkColor text-white rounded shadow"
            >
              Create account
            </Button>
          </div>
          <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
            <Link to="/sign-in" className="font-medium text-indigo-500">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
