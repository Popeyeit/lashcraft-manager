import { api } from "@/shared/api/axios";
export const getSalaries = async (artistId: number) => {
  const salary = await api.get(`/salaries?artistId=${artistId}`);

  return salary.data;
};
