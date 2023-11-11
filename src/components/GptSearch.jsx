import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSearchSuggestion from './GptSearchSuggestion'
import { BG_URl } from '../../utils/Constants';

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={BG_URl}
          alt="netflix-bg"
        />
      </div>
      <GptSearchBar />
      <GptSearchSuggestion />
    </div>
  );
}

export default GptSearch