import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      return action.payload;
    },
  },
});

export const { setIsLoggedIn } = loginSlice.actions;

export default loginSlice.reducer;
