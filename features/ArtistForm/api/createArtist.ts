import { ArtistFormData } from "../model/types";
import { api } from "@/shared/api/axios";
export const createNewArtist = async (data: ArtistFormData) => {
  const artist = await api.post("/artists", data);

  const salary = await api.post("/salaries", {
    artistId: artist.data.id,
  });
  const res = {
    ...artist.data,
    ...salary.data,
  };
  return res;
};
