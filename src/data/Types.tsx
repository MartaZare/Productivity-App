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
