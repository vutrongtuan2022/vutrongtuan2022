import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import siteReducer from "./reducer/site";
import authReducer from "./reducer/auth";
import userReducer from "./reducer/user";

const reducers = combineReducers({
  site: siteReducer,
  auth: authReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
