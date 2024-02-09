import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../authSlice/authSlice";
import rootReducer from "../authSlice/rootReducer";




export const store = configureStore({
    reducer: rootReducer,
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch