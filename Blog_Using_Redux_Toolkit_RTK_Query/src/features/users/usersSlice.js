import { createSlice } from "@reduxjs/toolkit";

const sliceName = "users";

const initialState = [
  { id: "0", name: "Atul Patel" },
  { id: "1", name: "Neil Harrison" },
  { id: "2", name: "Carry Gray" },
];

const usersSlice = createSlice({
  name: { sliceName },
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
