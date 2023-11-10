import React from "react";
import { IMAGE_CDN_URl } from "../../utils/Constants";

const MoivesCards = ({ posterPath }) => {
  return (
    
    <div className="w-48 pr-4 ">
      <img alt="moive_poster" src={IMAGE_CDN_URl + posterPath} />
    </div>
  );
};

export default MoivesCards;
