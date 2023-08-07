"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../model/transactionFormSchema";
import { TransactionFormData, TransactionDataType } from "../model/types";
import { useAlert, useModal, useUser } from "@/shared/model/store";
import { updateSalary } from "@/shared/api/updateSalary";
import { SalaryType } from "@/shared/model/types";
export const TransactionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TransactionFormData>({
    resolver: yupResolver(schema),
  });
  const [
    artist,
    updateStoreSalary,
    createStoreTransaction,
    salaries,
    createSalary,
  ] = useUser((state) => [
    state.artist,
    state.updateStoreSalary,
    state.createStoreTransaction,
    state.salaries,
    state.createSalary,
  ]);

  const [handleCloseModal] = useModal((state) => [state.closeModal]);
  const [toggleAlert] = useAlert((state) => [state.toggleAlert]);

  const onSubmit = async (data: TransactionFormData) => {
    const idx = salaries.findIndex((item: SalaryType) => {
      return (
        item?.approveSalon === "PENDING" && item?.approveArist === "PENDING"
      );
    });

    try {
      if (idx !== -1) {
        const salaryId = salaries[idx].id;
        const transactionData: TransactionDataType = {
          ...data,
          amount: Math.round(data.amount),
          tip: Math.round(data.tip as number),
          artistId: artist.id,
          salaryId,
        };

        await createStoreTransaction(transactionData);

        await updateStoreSalary({
          salaryId,
          transaction: data,
          percent: artist.percent,
        });
        toggleAlert("SUCCESS");
      } else {
        const salary = await createSalary(artist.id);
        if (salary?.id !== undefined) {
          const transactionData: TransactionDataType = {
            ...data,
            amount: Math.round(data.amount),
            tip: Math.round(data.tip as number),
            artistId: artist.id,
            salaryId: salary.id,
          };
          await createStoreTransaction(transactionData);
          await updateStoreSalary({
            salaryId: salary.id,
            transaction: data,
            percent: artist.percent,
          });
          toggleAlert("SUCCESS");
        }
      }
    } catch (error) {
      toggleAlert("ERROR");
    } finally {
    }
    handleCloseModal();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <h1 className="mt-4 text-xl text-center">Add Transaction</h1>
      <label htmlFor="customerName">Name</label>
      <input
        id="customerName"
        {...register("customerName")}
        className="w-full border-[1px] rounded-sm py-1 px-1"
      />
      <p className="text-error">{errors.customerName?.message}</p>

      <label htmlFor="amount" className="block mt-4">
        Amount
      </label>
      <input
        id="amount"
        type="number"
        {...register("amount")}
        className="w-full border-[1px] rounded-sm py-1 px-1"
      />
      <p className="text-error">{errors.amount?.message}</p>

      <label htmlFor="amount" className="block mt-4">
        Tip
      </label>
      <input
        id="tip"
        type="number"
        {...register("tip")}
        className="w-full border-[1px] rounded-sm py-1 px-1"
      />
      <p className="text-error">{errors.tip?.message}</p>

      <label htmlFor="service" className="block mt-4">
        Service
      </label>
      <input
        id="service"
        {...register("service")}
        className="w-full border-[1px] rounded-sm py-1 px-1"
      />

      <p className="text-error">{errors.service?.message}</p>

      <label htmlFor="paymentMethod" className="block mt-4">
        Payment Method
      </label>
      <select
        id="paymentMethod"
        {...register("paymentMethod")}
        defaultValue="USER"
        className="py-1 px-1 border-[1px] w-full"
      >
        <option value="CASH">Cash</option>
        <option value="ZELLE">Zelle</option>
        <option value="CARD">Card</option>
        <option value="VENMO">Venmo</option>
      </select>
      <p className="text-error">{errors.paymentMethod?.message}</p>

      <input
        type="submit"
        className="mt-10 w-[50%] mx-auto block h-[40px] border-[1px] rounded-lg cursor-pointer bg-primary text-white"
      />
    </form>
  );
};
