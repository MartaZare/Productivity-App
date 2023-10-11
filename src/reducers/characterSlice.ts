import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Character } from "../data/Types";

const initialState: Character = {
  userId: "1",
  nickname: "MarshMellow",
  champion: "",
  sesssions: 16,
  level: 1,
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
    setSessions: (state, action: PayloadAction<number>) => ({
      ...state,
      sessions: action.payload,
    }),
    levelUp: (state) => ({
      ...state,
      level: state.level + 1,
    }),
  },
});

export default characterSlice.reducer;

export const { setCharacter, setChampion, setSessions, levelUp } =
  characterSlice.actions;
