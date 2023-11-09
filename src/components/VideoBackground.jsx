import { useSelector } from "react-redux";
import useTrailerMoivesData from "../hooks/useTrailerMoivesData";

const VideoBackground = ({ moiveId }) => {
  const trailerVedio = useSelector((store) => store.movie?.trailerVedio);

  useTrailerMoivesData(moiveId);
  return (
    <div className="w-screen">
      <iframe className=" w-screen  aspect-video "
        src={"https://www.youtube.com/embed/" + trailerVedio?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
