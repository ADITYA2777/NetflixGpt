import React, { useRef } from "react";
import lang from "../../utils/LanguageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../../utils/Openai";
import { API_OPTIONS } from "../../utils/Constants";
import { addGptMoviesResults } from "../../utils/GptSlices";

const GptSearchBar = () => {
  const dispatch = useDispatch()
  const changeLang = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const SearchMoviesTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handlerGptSearchClick = async () => {
    console.log(searchText.current.value);

    // Make an api call to gpt api and get movie results
    const gptQuery =
      "Act as a movies recommendation system and suggest some movies for the query:" +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example results given ahead. Example Results: Sholay, Don, Hum Sath Sath Hai, Golmaal, Pk";

    try {
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });

      if (gptResults.choices) {
        console.log(gptResults.choices[0].message.content);
        const gptMovies = gptResults.choices[0].message.content.split(",");
        console.log(gptMovies);

        const promiseArray = gptMovies.map((movie) => SearchMoviesTMDB(movie))
        
        const tmdbResults = await Promise.all(promiseArray)
        console.log(tmdbResults);

           dispatch(addGptMoviesResults({movieNames:gptMovies,moviesResults:tmdbResults}))
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="pt-[50%] md:pt-[10%] flex justify-center">
      <form
        className=" w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[changeLang].gptSearchPlaceHolder}
        />
        <button
          className="col-span-3 bg-red-700 text-white  text-xl md:text-2xl  py-2 md:px-4 m-4 ml-2 rounded-lg"
          onClick={handlerGptSearchClick}
        >
          {lang[changeLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
