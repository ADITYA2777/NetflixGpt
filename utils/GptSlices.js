import { createSlice } from "@reduxjs/toolkit";


const gptSlices = createSlice({
    name:" gpt",
    initialState: {
        showGptSearch: false,
        movieNames: null,
        moviesResults:null,
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMoviesResults: (state, action) => {
            const {movieNames,moviesResults } = action.payload;
            state.movieNames = movieNames
            state.moviesResults = moviesResults
        },
    },
});
 export const  {toggleGptSearch,addGptMoviesResults} = gptSlices.actions 
export default gptSlices.reducer