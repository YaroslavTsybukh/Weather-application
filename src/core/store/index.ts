import {configureStore} from "@reduxjs/toolkit";
import {reducer as weather} from "../slices/weatherSlice";

export const store = configureStore({
    reducer: {weather},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
