import { configureStore } from "@reduxjs/toolkit";
import userReducer from './process/redux/AppSlice'

export const store = configureStore({
    reducer: {
        user: userReducer
    }
})