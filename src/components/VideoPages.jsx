import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoPages = () => {
  const { id } = useParams();
  const movies = useSelector((store) => store.movie?.nowPlayingMoive);

  if (!movies) return null;

  const selectedMovie = movies.find((movie) => movie.id.toString() === id);
  if (!selectedMovie) return null;

  const { original_title, overview, id: movieId } = selectedMovie;

  return (
    <div>
      <h2>{original_title}</h2>
      <p>{overview}</p>
      {/* Other components related to the individual movie */}
    </div>
  );
};

export default VideoPages;
