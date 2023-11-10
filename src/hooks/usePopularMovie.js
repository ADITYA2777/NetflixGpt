import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/Constants";
import { useDispatch } from "react-redux";
import { addMoviesPopular } from "../../utils/MoviesSlices";


const usePopularMovies = () => {
    // fetch data from TDBM  Api and updates store

    const dispatch = useDispatch();
    const getNowPopularMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?page=1",
            API_OPTIONS
        );
        const json = await data.json();
        console.log(json);
        dispatch(addMoviesPopular(json.results));
    };

    useEffect(() => {
        getNowPopularMovies();
    }, []);
};
export default usePopularMovies;