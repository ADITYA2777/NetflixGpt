import React from 'react'
import MoiveLists from './MoiveLists'
import { useSelector } from 'react-redux'

const SecondaryConatiner = () => {
  const movies = useSelector((store) => store.movie);
  return (
    <div>
      <MoiveLists titles={"Now Playing"} movies={movies?.nowPlayingMoive} />
      <MoiveLists titles={"Trending"} movies={movies?.nowPlayingMoive} />
      <MoiveLists titles={"Popular"} movies={movies?.nowPlayingMoive} />
      <MoiveLists titles={"Upcoming Movies"} movies={movies?.nowPlayingMoive} />
    </div>
  );
}

export default SecondaryConatiner