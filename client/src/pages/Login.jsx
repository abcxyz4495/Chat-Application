import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { FaCameraRetro } from "react-icons/fa";
import { useRef, useState } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

export default function Login() {
  const { register, handleSubmit, reset } = useForm();

  const [hasAccount, setHasAccount] = useLocalStorage("has_Account", true);

  const inputRef = useRef(null);

  const [image, setImage] = useState("");

  const handleToggle = () => setHasAccount(!hasAccount);

  const handleImage = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleLogin = (data) => {
    console.log(data);
    reset();
  };

  const handleSignUp = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="w-full h-screen flex">
      <div className="h-full w-2/4 max-[1100px]:w-full">
        <div className="w-full h-full flex justify-center items-center">
          <div className="max-w-[600px] min-w-[300px]">
            <div className="p-8">
              <h1 className="text-gray-600 text-md font-semibold pb-[50px]"></h1>
              <h2 className="font-bold text-3xl pb-1">
                {hasAccount ? "Sign In" : "Sign Up"}
              </h2>
              <p className="text-gray-600 pb-10">
                Enter your email address to get started
              </p>
              <button className="w-full h-[40px] border rounded-lg mb-3 text-sm font-bold shadow-md duration-75 hover:shadow-none">
                <FaGithub className="inline mr-1 text-lg" /> Sign in with Github
              </button>
              <button className="w-full h-[40px] border rounded-lg mb-8 text-sm font-bold text-center shadow-md duration-75 hover:shadow-none">
                <FcGoogle className="inline mr-1 text-lg" />
                Sign in with Google
              </button>
              <br />
              <form
                onSubmit={handleSubmit(hasAccount ? handleLogin : handleSignUp)}
              >
                {!hasAccount && (
                  <>
                    <div className="w-full h-20 text-center flex justify-center items-center">
                      <div
                        className="w-[100px] h-[100px] rounded-full relative cursor-pointer"
                        onClick={handleImage}
                      >
                        <input
                          type="file"
                          ref={inputRef}
                          className="hidden"
                          onChange={handleImageChange}
                        />
                        {image ? (
                          <img
                            src={URL.createObjectURL(image)}
                            alt="Profile_Img"
                            className="w-full h-full rounded-full object-cover object-center"
                          />
                        ) : (
                          <FaCircleUser className="w-full h-full" />
                        )}
                        <div className="absolute bottom-0 right-0 h-8 w-8 bg-slate-200 rounded-full flex justify-center items-center">
                          <FaCameraRetro className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                    <label htmlFor="username" className="text-gray-600 mb-2">
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      {...register("username", {pattern: [/[a-zA-Z]+/, 'Username must contain only alphabets']})}
                      placeholder="Your Username"
                      className="w-full border h-10 rounded-lg p-4 mb-4"
                      autoComplete="off"
                      required
                    />
                  </>
                )}
                <label htmlFor="email" className="text-gray-600 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email")}
                  placeholder="Your email address"
                  className="w-full border h-10 rounded-lg p-4 mb-4"
                  autoComplete="off"
                  required
                />
                <label htmlFor="password" className="text-gray-600">
                  Your Password
                </label>
                <input
                  name="password"
                  type="password"
                  {...register("password", { minLength: 8 })}
                  placeholder="Your password"
                  className="w-full border h-10 rounded-lg p-4 mb-6"
                  autoComplete="off"
                  required
                />
                <button
                  className="w-full border h-[40px] rounded-lg text-white bg-slate-900 font-bold shadow-md hover:bg-slate-950 duration-75"
                  type="submit"
                >
                  {hasAccount ? "Sign In" : "Sign Up"}
                </button>
              </form>
              <div className="text-center">
                <p
                  className="pt-7 pb-1 text-sm underline text-slate-500 cursor-pointer"
                  onClick={handleToggle}
                >
                  {hasAccount
                    ? "Don't have an account? Sign Up"
                    : "Already have an account? Sign In"}
                </p>
                <p className="text-sm underline text-slate-500"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-500 h-full w-2/4 max-[1100px]:hidden"></div>
    </div>
  );
}
