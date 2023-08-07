import { api } from "@/shared/api/axios";
import { DateTypes } from "../model/types";
export const getTransactionByDate = async (data: DateTypes) => {
  const transactions = await api.put("/transactions", data);
  return transactions.data;
};
