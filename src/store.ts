import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import loginSlice from "./reducers/loginSlice";
import characterSlice from "./reducers/characterSlice";

const store = configureStore({
  reducer: { user: userSlice, login: loginSlice, character: characterSlice },
  devTools: false,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
