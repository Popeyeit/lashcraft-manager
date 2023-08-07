export type ArtistFormData = {
  login: string;
  password: string;
  passwordConfirmation: string;
  percent: number;
  role: "USER" | "ADMIN";
  birthDay: Date;
};
