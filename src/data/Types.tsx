export type User = {
  email: string;
  password: string;
  role: string;
  token: string;
  persist: boolean;
};

export type Character = {
  userId: string;
  nickname: string;
  champion: string;
  sesssions: number;
};
