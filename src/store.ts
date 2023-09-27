import { configureStore } from "@reduxjs/toolkit";
import champSelectSlice from "./pages/home/champion-select/champSelectSlice";
import userSlice from "./pages/home/user-log-in/userSlice";


const store = configureStore({
  reducer: { champion: champSelectSlice, user: userSlice },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
