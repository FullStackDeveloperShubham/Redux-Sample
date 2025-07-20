import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./blogSlice.js"

// NOTE : create store 
export const store = configureStore({
    reducer:{
        posts:postsReducer
    }
})