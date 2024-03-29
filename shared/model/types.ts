import { TransactionFormData } from "@/features/TransactionForm/model/types";

export type UpdateSalaryTypes = {
  salaryId: number;
  transaction: TransactionFormData;
  percent: number;
};

export type SalaryType = {
  amountArtist: number;
  amountSalon: number;
  approveArtist: string;
  approveSalon: string;
  artistId: number;
  createdAt: string;
  id: number;
  updatedAt: string;
};

export type TransactionType = {
  id: number;
  customerName: string;
  amount: number;
  tip: number;
  service: string;
  artistId: number;
  salaryId: number;
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
};
