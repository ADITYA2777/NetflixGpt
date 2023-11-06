import { configureStore } from '@reduxjs/toolkit';
import userReducer from './AppSlices'

const appStore = configureStore({
    reducer: {
        user:userReducer,
    }
})
export default appStore;