import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  email: string;
  password: string;
  role: string;
  token: string;
}

const initialState: UserState = {
  email: "",
  password: "",
  role: "",
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserObject: (state, action: PayloadAction<UserState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setUserObject } = userSlice.actions;

export default userSlice.reducer;
