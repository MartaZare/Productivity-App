import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const champSelectSlice = createSlice({
  name: "champion",
  initialState,
  reducers: {
    chooseChampion: (state, action) => {
      return action.payload;
    },
  },
});

export const { chooseChampion } = champSelectSlice.actions;
export default champSelectSlice.reducer;
