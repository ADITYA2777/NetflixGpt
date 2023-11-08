import { configureStore } from '@reduxjs/toolkit';
import userReducer from './AppSlices'
import movieReducer from "./MoviesSlices";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie:movieReducer,
  },
});
export default appStore;