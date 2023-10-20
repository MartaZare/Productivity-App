import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CharacterType } from "../data/Types";

const initialState: CharacterType = {
  id: "1",
  userId: "",
  nickname: "",
  champion: "",
  time: 0,
  level: 0,
  progress: 0,
};

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setCharacter: (state, action: PayloadAction<CharacterType>) => ({
      ...state,
      ...action.payload,
    }),
    setChampionInRedux: (state, action: PayloadAction<string>) => ({
      ...state,
      champion: action.payload,
    }),
  },
});

export default characterSlice.reducer;

export const { setCharacter, setChampionInRedux } = characterSlice.actions;
