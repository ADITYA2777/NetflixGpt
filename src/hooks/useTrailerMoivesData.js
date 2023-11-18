import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVedio } from "../../utils/MoviesSlices";
import { API_OPTIONS } from "../../utils/Constants";

const useTrailerMoivesData = (moiveId) => {
  // Fetch Moive vedio && updating the store with the trialer data..

  const dispatch = useDispatch();
  const trailerVedio = useSelector((store) => store.movie.trailerVedio);

  const getMoviesVedio = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        moiveId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    const filterData = json?.results?.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer);
    dispatch(addTrailerVedio(trailer));
  };

  useEffect(() => {
    !trailerVedio && getMoviesVedio();
  }, []);
};

export default useTrailerMoivesData;
