import { configureStore } from "@reduxjs/toolkit";
import featReducer from "../features/f1/featSlice";

const store = configureStore({
  //import reducers and assign them in keyName that you want inside store to hold SToreValues.
  reducer: {
    counter: featReducer,
  },
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(apiSlice.middleware),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;
