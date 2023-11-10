import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovie'
import useTrendingMovies from '../hooks/useTrendingMovies'
import useUpComingMovies from '../hooks/useUpComingMovies'
import Header from './Header'
import MainContiner from './MainContiner'
import SecondaryConatiner from './SecondaryConatiner'

const Browse = () => {
  
  useNowPlayingMovies()
  usePopularMovies()
  useTrendingMovies()
  useUpComingMovies()
  return (
    <div>
      <Header />
      <MainContiner />
      <SecondaryConatiner />
      
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
  )
}

export default Browse