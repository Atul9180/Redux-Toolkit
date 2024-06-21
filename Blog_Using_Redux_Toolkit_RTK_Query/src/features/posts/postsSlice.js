import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial state of the slice
const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things",
  },
  {
    id: "2",
    title: "Slices goes here...",
    content:
      "Slices are basically the reducers and state holders of any feature...",
  },
];

const sliceStoreName = "posts"; // Name of your slice

const postsSlice = createSlice({
  name: sliceStoreName,
  initialState,
  reducers: {
    // Reducers go here

    // addPost reducer and prepare function
    addPost: {
      reducer(state, action) {
        // Directly mutating state with state.push(action.payload)
        // is handled safely by Immer.js (used internally by Redux Toolkit)
        state.push(action.payload);
      },
      prepare(title, content) {
        // Prepare function to generate action payload
        //prepare(): Provides a way to encapsulate the logic for creating action objects with predefined properties. It returns an object with a payload .
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

// Selector to fetch all posts from state
export const selectAllPosts = (state) => state.posts;

// Export individual reducers to be used in components for dispatching actions
export const { addPost } = postsSlice.actions;

// Export the reducer function to be used in the Redux store configuration
export default postsSlice.reducer;
