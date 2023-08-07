import { responseArtists } from "./../model/types";
import { api } from "@/shared/api/axios";
export const getArtists = async () => {
  const res: { data: responseArtists[] } = await api.get("/artists");

  return res.data;
};
