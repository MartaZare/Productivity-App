import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../../Types";

const persistedValue = localStorage.getItem("persist");

const initialState: User = {
  email: "",
  password: "",
  role: "",
  token: "",
  persist: persistedValue ? JSON.parse(persistedValue) : false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserObject: (state, action: PayloadAction<User>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        token: action.payload,
      };
    },
    setRole: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        role: action.payload,
      };
    },
    setPersist: (state) => {
      return {
        ...state,
        persist: !state.persist,
      };
    },
  },
});

export const { setUserObject, setAccessToken, setRole, setPersist } =
  userSlice.actions;

export default userSlice.reducer;
