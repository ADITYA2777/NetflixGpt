import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInFrom, SetIsSignInfrom] = useState(true);

  const toggelSignhandlerMenu = () => {
    SetIsSignInfrom(!isSignInFrom);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="netflix-bg"
        />
      </div>
      <form
        className=" w-3/12 p-12 absolute text-white 
       bg-black/[0.8] my-36 mx-auto left-0 right-0 rounded-lg "
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInFrom && (
          <input
            type="text"
            placeholder="Enter Your FullName"
            className="p-2 my-4 w-full bg-gray-900"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-900"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-900"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 ">
          {isSignInFrom ? (
            <p>
              New to Netflix ?
              <span
                onClick={toggelSignhandlerMenu}
                className="cursor-pointer text-blue-600/[0.5] hover:underline"
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already registered ?  
              <span
                onClick={toggelSignhandlerMenu}
                className="cursor-pointer text-blue-600/[0.5] hover:underline"
              >
                Sign Up Now
              </span>
            </p>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
