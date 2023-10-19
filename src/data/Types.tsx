export type UserType = {
  id: string;
  email: string;
  password: string;
  role: string;
  token: string;
  persist: boolean;
};

export type CharacterType = {
  id: string;
  userId: string;
  nickname: string;
  champion: string;
  time: number;
  level: number;
};

export type SessionType = {
  id: string;
  characterId: string;
  date: string;
  time: number;
};

export type HistoryType = {
  date: string;
  time: number;
};
