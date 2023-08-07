import { TransactionDataType } from "../model/types";
import { api } from "@/shared/api/axios";
export const createTransaction = async (data: TransactionDataType) => {
  const transaction = await api.post("/transactions", data);
  return transaction.data;
};
