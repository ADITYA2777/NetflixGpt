import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/Firbase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/AppSlices";
import { LOGOURL, SUPPORTED_LANGUAGES } from "../../utils/Constants";
import { toggleGptSearch } from "../../utils/GptSlices";
import { ChangesLanguages } from "../../utils/ConfigAppSlices";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handlerSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //  unsubscribe  when component unmounts
    return () => unsubscribe();
  }, []);

  const handlerGptSearch = () => {
    //  let build Toggle to GptSearch
    dispatch(toggleGptSearch());
  };

  const handlerLanguagesChanger = (e) => {
    dispatch(ChangesLanguages(e.target.value));
  };

  return (
    <div
      className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black/[0.5] z-10 
    flex flex-col justify-center  md:flex-row  md:justify-between"
    >
      <img className="w-44 mx-auto md:mx-0" src={LOGOURL} alt="logo" />
      {user && (
        <div className="flex p-2 items-center ">
          {showGptSearch && (
            <select
              className="p-2 bg-slate-800 text-white font-bold"
              onChange={handlerLanguagesChanger}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className=" bg-purple-800 text-white p-3 mx-4 rounded-xl"
            onClick={handlerGptSearch}
          >
            {showGptSearch ? "Home Page" : " GPT Search"}
          </button>
          <img className="h-12 w-12" alt="icon" src={user?.photoURL} />
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
