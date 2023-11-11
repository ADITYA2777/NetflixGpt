import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/Constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../../utils/MoviesSlices";


const useUpComingMovies = () => {
    // Fetch data TDBM with updating UpcomingMovies  with store 
    const dispatch = useDispatch()
    const getUpComingMovies =async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming?page=1",
          API_OPTIONS
        );
        const json = await data.json()
        // console.log(json);
        dispatch(addUpcomingMovies(json.results))
    }
    useEffect(() => {
        getUpComingMovies();
    },[])
}
export default useUpComingMovies; 