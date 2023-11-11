import { createSlice } from "@reduxjs/toolkit";

const configAppSlices = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    ChangesLanguages: (state, action) => {
      state.lang = action.payload;
    },
  },
});
export const { ChangesLanguages } = configAppSlices.actions;
export default configAppSlices.reducer;
