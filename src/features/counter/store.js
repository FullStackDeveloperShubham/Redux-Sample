import { configureStore } from "@reduxjs/toolkit";
import reducer from "../counter/counterSlice.js";

// NOTE : create the store 
export const store = configureStore({
    reducer:{
        counter:reducer
    }
})
