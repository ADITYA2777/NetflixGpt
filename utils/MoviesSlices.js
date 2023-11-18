

import { createSlice } from "@reduxjs/toolkit";

const moviesSlices = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMoive: null,
    MoviesPopular: null,
    trailerVedio: null,
    TrendingMovies: null,
    UpcomingMovies:null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMoive = action.payload;
    },
    addMoviesPopular: (state, action) => {
      state.MoviesPopular = action.payload;
    },
    addTopRating: (state, action) => {
      state.TrendingMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.UpcomingMovies = action.payload;
    },
    addTrailerVedio: (state, action) => {
      state.trailerVedio = action.payload;
    },
  },
});
export const { addMovies, addTrailerVedio,addMoviesPopular,addTopRating,addUpcomingMovies} = moviesSlices.actions;
export default moviesSlices.reducer;