import React from 'react'
const VideoTitle = ({ title, overview }) => {
    return (
      <div className=" w-screen aspect-video  absolute  text-white md:pt-[15%] pt-[30%] px-4 md:px-12 bg-gradient-to-r from-bg-black">
        <h1 className=" text-2xl  md:text-5xl  md:font-bold  ">{title}</h1>
        <p className="  hidden md:inline-block py-6  text-lg w-1/4  ">{overview}</p>
        <div className='my-4 md:m-0'>
          <button className="bg-white text-black py-1 px-3 md:py-4 md:px-10 text-xl rounded-lg hover:bg-opacity-50">
            ▶ Play
          </button>
          <button className=" hidden md:inline-block  mx-2 bg-gray-500  text-white p-4 px-10 text-xl  bg-opacity-50 rounded-lg hover:bg-opacity-80 ">
            More Info
          </button>
        </div>
      </div>
    );
};

export default VideoTitle



