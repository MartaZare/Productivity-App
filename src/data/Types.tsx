export type User = {
  id: string;
  email: string;
  password: string;
  role: string;
  token: string;
  persist: boolean;
};

export type Character = {
  id: string;
  userId: string;
  nickname: string;
  champion: string;
  time: number;
  level: number;
};

export type Session = {
  id: string;
  characterId: string;
  date: string;
  time: number;
};

export type History = {
  date: string;
  time: number;
};
