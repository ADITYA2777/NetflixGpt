import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovie'
import useTrendingMovies from '../hooks/useTrendingMovies'
import useUpComingMovies from '../hooks/useUpComingMovies'
import GptSearch from './GptSearch'
import Header from './Header'
import MainContiner from './MainContiner'
import SecondaryConatiner from './SecondaryConatiner'

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies()
  usePopularMovies()
  useTrendingMovies()
  useUpComingMovies()
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContiner />
          <SecondaryConatiner />
        </>
      )}

     

      {/**
       *
       *    MainConatiner
       *    - Background Video
       *     - Video Title
       *
       *   SecondaryContanier
       *      -Movies List * n
       *       - Cards * n
       *
       */}
    </div>
  );
}

export default Browse