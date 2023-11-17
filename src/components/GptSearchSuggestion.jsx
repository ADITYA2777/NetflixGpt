import React from 'react'
import { useSelector } from 'react-redux';
import MoiveLists from './MoiveLists';

const GptSearchSuggestion = () => {

  const { moviesResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null; 
    
  
  return (
    <div className="p-4 m-4 bg-black  text-white bg-opacity-90">
      <div>
        {movieNames?.map((movieName, index) => (
          <MoiveLists
            key={movieName}
            titles={movieName}
            movies={moviesResults[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default GptSearchSuggestion;