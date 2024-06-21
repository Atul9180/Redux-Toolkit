import { configureStore } from "@reduxjs/toolkit";
import { postsReducer, usersReducer } from "../features";

const store = configureStore({
  //import reducers and assign them in keyName that you want inside store to hold SToreValues.
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});

export default store;
