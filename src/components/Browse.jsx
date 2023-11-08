import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContiner from './MainContiner'
import SecondaryConatiner from './SecondaryConatiner'

const Browse = () => {
  
useNowPlayingMovies()
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