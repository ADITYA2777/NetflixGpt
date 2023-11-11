import React from 'react'
const VideoTitle = ({ title, overview }) => {
    return (
      <div className=" w-screen aspect-video absolute  text-white pt-[15%]  px-12 bg-gradient-to-r from-bg-black">
        <h1 className="text-5xl font-bold  ">{title}</h1>
        <p className="py-6  text-lg w-1/4  ">{overview}</p>
        <div>
          <button className="bg-white  text-black p-4 px-10 text-xl rounded-lg hover:bg-opacity-50">
            ▶ Play
          </button>
          <button className=" mx-2 bg-gray-500  text-white p-4 px-10 text-xl  bg-opacity-50 rounded-lg hover:bg-opacity-80 ">
            More Info
          </button>
        </div>
      </div>
    );
};

export default VideoTitle



