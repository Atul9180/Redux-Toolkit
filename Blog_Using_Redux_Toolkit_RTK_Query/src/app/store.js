import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";

const store = configureStore({
  //import reducers and assign them in keyName that you want inside store to hold SToreValues.
  reducer: {
    posts: postsReducer,
  },
});

export default store;
