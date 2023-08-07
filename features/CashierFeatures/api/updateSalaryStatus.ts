import { api } from "@/shared/api/axios";
import { SalaryStatusType } from "../lib/types";

export const updateSalaryStatus = async (data: SalaryStatusType) => {
  const salary = await api.put(`/salaries/cashier`, data);

  return salary.data;
};
