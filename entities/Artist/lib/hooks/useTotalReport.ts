"use client";
import { ArtistType } from "@/shared/model/store";
import { SalaryType, TransactionType } from "@/shared/model/types";
import { useMemo } from "react";

export const useTotalReport = (
  transactions: TransactionType[],
  user: ArtistType
) => {
  const tips = useMemo(
    () =>
      transactions.reduce((acc, item) => {
        return (acc += item.tip);
      }, 0),
    [transactions]
  );

  const artistEarn = useMemo(
    () =>
      transactions.reduce((acc, item) => {
        return (acc += (item.amount / 100) * user.percent);
      }, 0),
    [user, transactions]
  );

  const salonEarn = useMemo(
    () =>
      transactions.reduce((acc, item) => {
        const artistSalary = (item.amount / 100) * user.percent;
        return (acc += item.amount - artistSalary);
      }, 0),
    [user, transactions]
  );

  const paymentMethods = useMemo(() => {
    const methods = { venmo: 0, cash: 0, zelle: 0, card: 0 };
    transactions.forEach((item) => {
      switch (item.paymentMethod) {
        case "ZELLE":
          methods.zelle += item.amount;
          return;
        case "VENMO":
          methods.venmo += item.amount;
          return;
        case "CASH":
          methods.cash += item.amount;
          return;
        case "CARD":
          methods.card += item.amount;
          return;
      }
    });
    return methods;
  }, [user, transactions]);

  return {
    tips,
    artistEarn,
    salonEarn,
    paymentMethods,
  };
};
