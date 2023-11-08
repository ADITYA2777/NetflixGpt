import React from 'react'
const VideoTitle = ({ title, overview }) => {
    return (
      <div className="pt-36  px-12">
        <h1 className="text-5xl font-bold ">{title}</h1>
        <p className="py-6  text-lg w-1/3 ">{overview}</p>
        <div>
          <button className="bg-white border border-black text-black p-4 px-10 text-xl rounded-lg bg-opacity-25">
            ▶️ Play
          </button>
          <button className=" mx-2 bg-gray-400  text-white p-4 px-10 text-xl rounded-lg ">
            More Info
          </button>
        </div>
      </div>
    );
};

export default VideoTitle