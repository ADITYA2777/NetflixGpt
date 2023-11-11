import { createSlice } from "@reduxjs/toolkit";


const gptSlices = createSlice({
    name:" gpt",
    initialState: {
        showGptSearch: false
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
    },
});
 export const  {toggleGptSearch} = gptSlices.actions 
export default gptSlices.reducer