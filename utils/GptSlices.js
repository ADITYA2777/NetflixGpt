import { createSlice } from "@reduxjs/toolkit";


const gptSlices = createSlice({
    name:" gpt",
    initialState: {
        showGptSearch: false,
        movieNames: null,
        moviesResults: null,
        addRemover:{}
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
        addRemover: (state) => {
            state.addRemover = {}
        }
    },
});
 export const  {toggleGptSearch,addGptMoviesResults,addRemover} = gptSlices.actions 
export default gptSlices.reducer