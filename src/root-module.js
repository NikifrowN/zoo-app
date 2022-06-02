import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { zooSlice } from "./features/zoo/module";

const rootReducer = combineReducers({
   zoo: zooSlice.reducer,
});

export const store = configureStore({
   reducer: rootReducer,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
   devTools: true,
});
