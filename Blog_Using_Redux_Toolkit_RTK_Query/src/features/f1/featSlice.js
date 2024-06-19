import { createSlice } from "@reduxjs/toolkit";

//give initial states of slice
const initialState = {
  ctr: 0,
};

const sliceStoreName = "counter"; //give your slice a name here

const featSlice = createSlice({
  name: sliceStoreName,
  initialState,
  reducers: {
    //reducers goes here:
    decrement: (state) => {
      state.ctr -= 1;
    },
  },
});

// Export individual reducers-->to be used in component as dispatch actions
export const { decrement } = featSlice.actions;

//export reducer to be used in store
export default featSlice.reducer;
