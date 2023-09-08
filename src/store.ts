import { configureStore } from "@reduxjs/toolkit";
import champSelectSlice from "./pages/home/components/champSelectSlice";

const store = configureStore({ reducer: { champion: champSelectSlice } });

export type RootState = ReturnType<typeof store.getState>;

export default store;
