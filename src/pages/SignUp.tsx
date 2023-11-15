import { useState } from "react";
import { createUserWithEmailAndPasswordCustom } from "../utils/signUpWithEmailAndPassword";

function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signUp = () => createUserWithEmailAndPasswordCustom(email , password)

  return (
    <div className="container mx-auto p-8 flex">
      <div className="max-w-md w-full mx-auto">
        <h1 className="text-4xl text-center mb-12 font-thin">buddy meter</h1>

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

            <button onClick={signUp} className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow">
            Create account
            </button>
          </div>

          <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
            <a href="#" className="font-medium text-indigo-500">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
