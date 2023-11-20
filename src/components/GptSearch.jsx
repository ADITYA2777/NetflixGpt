import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSearchSuggestion from './GptSearchSuggestion'
import { BG_URl } from '../../utils/Constants';

const GptSearch = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <img
          className="w-full h-full object-cover"
          src={BG_URl}
          alt="netflix-bg"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptSearchSuggestion />
      </div>
    </div>
  );
};

export default GptSearch