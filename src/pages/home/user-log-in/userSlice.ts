import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  currentUser: string;
}

const initialState: UserState = {
  currentUser: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      return { ...state, currentUser: action.payload };
    },
  },
});

export const { setUsername } = userSlice.actions;
export default userSlice.reducer;
