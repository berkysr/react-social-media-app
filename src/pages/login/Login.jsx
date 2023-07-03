import React from "react";
import { Google, Apple } from "@mui/icons-material";

export default function Login() {
  return (
    <>
      <div className="logInContainer w-screen h-screen flex items-center justify-center bg-gradient-to-tl from-green-700 to-blue-900">
        <div className="logInWrapper shadow-card w-[75vh] h-[75vh] flex justify-center flex-col p-20 bg-gray-200">
          <h1 className="welcomeText text-2xl font-bold py-5">Welcome Back</h1>
          <div className="logInUpperSection flex flex-row justify-evenly">
            <button className="signinGoogle h-12 flex-[5] flex justify-evenly items-center px-8 overflow-hidden rounded-lg bg-white text-lg shadow mt-6 m-1.5 text-sm hover:bg-gray-200">
            <Google/>
              Log in with Google
            </button>
            <button className="signinApple h-12 flex-[5] flex justify-evenly items-center px-8 overflow-hidden rounded-lg bg-white text-lg shadow mt-6 m-1.5 text-sm hover:bg-gray-200">
            <Apple/>
              Log in with Apple
            </button>
          </div>
          <div className="divider flex flex-column items-center m-3.5">
            <div className="divide flex-[4] border-gray-400 border h-[2px]"></div><div className="dividerText flex[2] mx-5">or</div><div className="divide flex-[4] border-gray-400 border h-[2px]"></div>
          </div>
          <div className="inputWrapper flex align-center justify-center flex-col py-2.5 w-full">
            <span className="emailText text-sm">Your Email</span>
            <input
              type="text"
              className="email border-solid rounded-xl border-grey border-2 p-2.5 mt-1.5 focus:mt-[-50] focus:border-blue-500 focus:outline-none"
              placeholder="example@domain.com"
            />
          </div>
          <div className="inputWrapper flex align-center justify-center flex-col py-2.5 w-full">
            <span className="passwordText text-sm">Password</span>
            <input
              type="password"
              name="password"
              className="password border-solid rounded-xl border-grey border-2 p-2.5 mt-1.5 focus:mt-[-50] focus:border-blue-500 focus:outline-none"
              placeholder="Password"
            />
          </div>
          <button className="logIn group relative h-12 w-full overflow-hidden rounded-lg bg-white text-lg shadow mt-6">
            <div className="absolute inset-0 w-3 bg-blue-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">
              Sign in to your account
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
