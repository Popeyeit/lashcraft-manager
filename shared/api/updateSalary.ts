import { TransactionFormData } from "@/features/TransactionForm/model/types";
import { api } from "@/shared/api/axios";
export const updateSalary = async (data: {
  salaryId: number;
  transaction: TransactionFormData;
  percent: number;
}) => {
  const salary = await api.put("/salaries", data);
  return salary;
};
