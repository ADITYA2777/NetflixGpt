
import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRating } from "../../utils/MoviesSlices";

const useTrendingMovies = () => {
  // fetch data from TDBM  Api and updates store Top-Rating

  const dispatch = useDispatch();
    const TrendingMovies = useSelector((store) => store.movie.TrendingMovies);

  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    dispatch(addTopRating(json.results));
  };

  useEffect(() => {
    !TrendingMovies && getTrendingMovies();
  }, []);
};
export default useTrendingMovies;