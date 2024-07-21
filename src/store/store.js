import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "../bookSlice";

const store=configureStore({
    reducer:{
        booksReducer:bookSlice
    }
})
export default store;