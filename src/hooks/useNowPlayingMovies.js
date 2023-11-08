import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/Constants";
import { addMovies } from "../../utils/MoviesSlices";

const useNowPlayingMovies = () => {

    // fetch data TMDB and updating store

    
     const dispatch = useDispatch();
     const getApiMoivesCall = async () => {
       const data = await fetch(
         "https://api.themoviedb.org/3/movie/now_playing?page=1",
         API_OPTIONS
       );
       const json = await data.json();
       console.log(json.results);
       dispatch(addMovies(json.results));
     };

     useEffect(() => {
       getApiMoivesCall();
     }, []);
}
export default useNowPlayingMovies;