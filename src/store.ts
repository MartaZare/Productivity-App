import { configureStore } from "@reduxjs/toolkit";
import champSelectSlice from "./reducers/champSelectSlice";
import userSlice from "./reducers/userSlice";
import loginSlice from "./reducers/loginSlice";

const store = configureStore({
  reducer: { champion: champSelectSlice, user: userSlice, login: loginSlice },
  devTools: false,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
