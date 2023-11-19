import React from 'react'
import MoiveLists from './MoiveLists'
import { useSelector } from 'react-redux'

const SecondaryConatiner = () => {
  const movies = useSelector((store) => store.movie);
  return (
    movies.nowPlayingMoive && (
      <div className="bg-black">
        <div className="mt-0 md:-mt-52 md:pt-12 pl-4 md:pl-10 relative z-20">
          <MoiveLists titles={"Now Playing"} movies={movies?.nowPlayingMoive} />
          <MoiveLists titles={"Trending"} movies={movies?.TrendingMovies} />
          <MoiveLists titles={"Popular"} movies={movies?.MoviesPopular} />
          <MoiveLists
            titles={"Upcoming Movies"}
            movies={movies?.UpcomingMovies}
          />
        </div>
      </div>
    )
  );
}

export default SecondaryConatiner 