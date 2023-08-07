import { authFormData } from "../model/types";
import { api } from "@/shared/api/axios";
export const signInFetch = async (data: authFormData) => {
  try {
    const artist = await api.post("/auth", data);
    return artist.data;
  } catch (error) {
    console.log(error);
  }
};
