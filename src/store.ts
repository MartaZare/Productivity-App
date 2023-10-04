import { configureStore } from "@reduxjs/toolkit";
import champSelectSlice from "./pages/home/champion-select/champSelectSlice";
import userSlice from "./pages/home/login/userSlice";
import loginSlice from "./pages/home/login/loginSlice";

const store = configureStore({
  reducer: { champion: champSelectSlice, user: userSlice, login: loginSlice },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
