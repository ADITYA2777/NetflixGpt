import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContiner = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMoive);
  // if (movies === null) return;
  if (!movies) return; // early return

  const mainMoives = movies[0];
  // console.log(mainMoives);

  const { original_title, overview ,id} = mainMoives;
  return (
    <div className="pt-[30%] bg-black md:pt-0 ">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground moiveId={id} />
    </div>
  );
};

export default MainContiner;
