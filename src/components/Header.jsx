import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/Firbase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const navigate = useNavigate()
  const user = useSelector((store) => store.user)
  const handlerSignOut = () => {
    signOut(auth)
      .then(() => {
       navigate("/");
      })
      .catch((error) => {
       navigate("/error");
      });
  }

  return (
    <div
      className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black/[0.5] z-10 
    flex justify-between"
    >
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
        <img className="h-12 w-12" alt="icon"src={user?.photoURL} />
        <button
          className="font-bold text-white p-2 m-2 bg-slate-800 rounded-xl   cursor-pointer hover:bg-red-600"
          onClick={handlerSignOut}
        >
          SignOut
        </button>
        </div>
      )}
    </div>
  );
};

export default Header;
