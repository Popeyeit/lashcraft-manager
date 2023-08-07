import {
  CreateTransaction,
  TransactionTableInfo,
} from "@/entities/TransactionTable";
import { TransactionForm } from "@/features/TransactionForm";
import React from "react";

export const TransactionTable = () => {
  return (
    <div className="pt-20">
      <TransactionTableInfo />
      <CreateTransaction>
        <TransactionForm />
      </CreateTransaction>
    </div>
  );
};
