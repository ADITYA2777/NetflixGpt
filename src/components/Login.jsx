import React, { useRef, useState } from "react";
import Header from "./Header";
import { emailCheckerHandler } from "../../utils/Valdation";
import { auth } from "../../utils/Firbase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, 
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/AppSlices";

const Login = () => {
  const dispatch = useDispatch()
    const [isSignInFrom, SetIsSignInfrom] = useState(true);
    const [errorMessage,setErrorMessage]= useState(null)
  const navigate = useNavigate() 
  
  const fullname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

   const handlerButtonClick = () => {
     const emailValue = email.current ? email.current.value : "";
     const passwordValue = password.current ? password.current.value : "";
    //  const fullnameValue = fullname.current ? fullname.current.value : "";

     const message = emailCheckerHandler(
       emailValue,
       passwordValue,
     );
     setErrorMessage(message);

     if (message) return;

     if (!isSignInFrom) {
       // sign Up Logic
       createUserWithEmailAndPassword(
         auth,
        email.current.value,
         password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullname.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/124715616?v=4",
          })
            .then(() => {
               const { uid, email, displayName, photoURL } = auth.currentUser;
               dispatch(
                 addUser({
                   uid: uid,
                   email: email,
                   displayName: displayName,
                   photoURL: photoURL,
                 })
               );
              navigate("/browse");
            })
            .catch((error) => {
             setErrorMessage(error.message)
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
     }
     else {
       //   sign In Logic
       signInWithEmailAndPassword(
         auth,
         email.current.value,
         password.current.value
       )
         .then((userCredential) => {
           const user = userCredential.user;
           console.log(user);
           navigate("/browse");
         })
         .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
         });

     }

   };




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
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" w-3/12 p-12 absolute text-white 
       bg-black/[0.8] my-36 mx-auto left-0 right-0 rounded-lg "
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInFrom && (
          <input
            ref={fullname}
            type="text"
            placeholder="Enter Your FullName"
            className="p-2 my-4 w-full bg-gray-900"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-900"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-900"
        />
        <p className="text-lg text-red-500 font-bold py-2">{errorMessage}</p>
        <button
          onClick={handlerButtonClick}
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
        >
          {isSignInFrom ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 ">
          {isSignInFrom ? (
            <>
              New to Netflix ?
              <span
                onClick={toggelSignhandlerMenu}
                className="cursor-pointer text-blue-600/[0.5] hover:underline"
              >
                Sign Up Now
              </span>
            </>
          ) : (
            <>
              Already registered ?
              <span
                onClick={toggelSignhandlerMenu}
                className="cursor-pointer text-blue-600/[0.5] hover:underline"
              >
                Sign Up Now
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
