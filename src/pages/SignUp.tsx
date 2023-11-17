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

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signUp = async function () {
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);
      const newData: userType = {
        userId: data.user.uid,
        userLogo: "",
        userName: email,
        quizes: [],
      };
      await addDoc(userCollection, newData);
      dispatch(updateUser(newData))      
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-8 flex">
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
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
              />
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
