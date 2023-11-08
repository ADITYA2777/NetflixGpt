

import { createSlice } from "@reduxjs/toolkit";

const moviesSlices = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMoive: null,
    trailerVedio: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMoive = action.payload;
    },
    addTrailerVedio: (state, action) => {
      state.trailerVedio = action.payload;
    },
  },
});
export const { addMovies, addTrailerVedio } = moviesSlices.actions;
export default moviesSlices.reducer;