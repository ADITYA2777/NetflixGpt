import React from 'react'
import MoviesCards from './MoivesCards';

const MoiveLists = ({ titles, movies }) => {
    // console.log(movies);
  return (
    <div className="px-6 ">
      <h1 className="flex text-lg md:text-3xl py-4 text-white">{titles}</h1>
      <div className="flex  overflow-x-scroll hide-scrollbar ">
        <div className="flex">
          {movies?.map((movie) => (
              <MoviesCards key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoiveLists




