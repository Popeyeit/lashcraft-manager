import { api } from "@/shared/api/axios";
import { SalaryType } from "@/shared/model/types";
import { AxiosResponse } from "axios";
export const createSalary = async (id: number) => {
  const salary: AxiosResponse<SalaryType, SalaryType> = await api.post(
    "/salaries",
    {
      artistId: id,
    }
  );
  return salary.data;
};
