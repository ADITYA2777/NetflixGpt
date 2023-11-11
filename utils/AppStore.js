import { configureStore } from '@reduxjs/toolkit';
import userReducer from './AppSlices'
import movieReducer from "./MoviesSlices";
import gptReducer from "./GptSlices"
import configReducer from "./ConfigAppSlices";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    gpt: gptReducer,
    config:configReducer,
  },
});
export default appStore;