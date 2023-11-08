import React, { useEffect } from "react";
import { API_OPTIONS } from "../../utils/Constants";
import { json } from "react-router-dom";

const VideoBackground = ({ moiveId }) => {
  // fetch Moive vedio
  const getMoviesVedio = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/507089/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const filterData = json?.results?.filter((video) => video.type === "Trailer");

    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
  };

  useEffect(() => {
    getMoviesVedio();
  }, []);

    return (
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/X4d_v-HyR4o?si=e2q09tCImp7S5LES"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    );
};

export default VideoBackground;
