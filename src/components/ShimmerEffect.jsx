// ShimmerEffect.js

import React from "react";

const ShimmerEffect = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-90">
      <div className="w-12 h-12 border-t-4 border-red-500 border-solid rounded-full animate-spin"></div>
      <div className="ml-4 text-white">Loading...</div>
    </div>
  );
};

export default ShimmerEffect;
