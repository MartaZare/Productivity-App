import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Character } from "../data/Types";

const initialState: Character = {
  id: "",
  userId: "",
  nickname: "",
  champion: "",
  time: 0,
  level: 0,
};

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setCharacter: (state, action: PayloadAction<Character>) => ({
      ...state,
      ...action.payload,
    }),
    setChampion: (state, action: PayloadAction<string>) => ({
      ...state,
      champion: action.payload,
    }),
    setTime: (state, action: PayloadAction<number>) => ({
      ...state,
      time: action.payload,
    }),
    levelUp: (state) => ({
      ...state,
      level: state.level + 1,
    }),
  },
});

export default characterSlice.reducer;

export const { setCharacter, setChampion, setTime, levelUp } =
  characterSlice.actions;
