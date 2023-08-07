"use client";
import React from "react";
import { data } from "../../model/data";
import { useUser } from "@/shared/model/store";
import { DatePickerRange } from "@/features/DatePicker";
import { Tabs } from "@/shared/ui/Tabs/Tabs";
export const TransactionTableInfo = () => {
  const [artist, transactions] = useUser((state) => [
    state.artist,
    state.transactions,
  ]);
  return (
    <div>
      <Tabs />
      <DatePickerRange />
      <table className="w-full border-collapse ">
        <thead className="max-[500px]:hidden">
          <tr>
            {data.titles.map((item) => (
              <th
                key={item}
                className="px-4 py-3 text-base text-center text-white border-[1px] bg-primary"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="max-[500px]:block max-[500px]:w-full">
          {transactions.map((item, idx) => {
            const amountWithPercent = (item.amount / 100) * artist.percent;
            return (
              <tr
                key={idx}
                className="max-[500px]:block max-[500px]:w-full max-[500px]:mb-4 bg-white even:bg-gray-500"
              >
                <td
                  data-label="No"
                  className="px-4 py-3 text-base text-center border-[1px]
                max-[500px]:block max-[500px]:w-full
                max-[500px]:pl-[50%] max-[500px]:text-left max-[500px]:relative
                max-[500px]:before:absolute max-[500px]:before:left-0 max-[500px]:before:w-[50%] 
                max-[500px]:before:pl-4 max-[500px]:before:text-base 
                max-[500px]:before:text-left max-[500px]:before:content-[attr(data-label)] max-[500px]:before:font-bold"
                >
                  {idx + 1}
                </td>
                <td
                  key={"Data" + idx}
                  data-label="Date"
                  className="px-4 py-3 text-base text-center border-[1px]
                max-[500px]:block max-[500px]:w-full
                max-[500px]:pl-[50%] max-[500px]:text-left max-[500px]:relative
                max-[500px]:before:absolute max-[500px]:before:left-0 max-[500px]:before:w-[50%] 
                max-[500px]:before:pl-4 max-[500px]:before:text-base 
                max-[500px]:before:text-left max-[500px]:before:content-[attr(data-label)] max-[500px]:before:font-bold"
                >
                  {new Date(item.createdAt).toDateString()}
                </td>
                <td
                  key={item.customerName + "" + idx}
                  data-label="Name"
                  className="px-4 py-3 text-base text-center border-[1px]
                max-[500px]:block max-[500px]:w-full
                max-[500px]:pl-[50%] max-[500px]:text-left max-[500px]:relative
                max-[500px]:before:absolute max-[500px]:before:left-0 max-[500px]:before:w-[50%] 
                max-[500px]:before:pl-4 max-[500px]:before:text-base 
                max-[500px]:before:text-left max-[500px]:before:content-[attr(data-label)] max-[500px]:before:font-bold"
                >
                  {item.customerName}
                </td>
                <td
                  key={item.service + "" + idx}
                  data-label="Service"
                  className="px-4 py-3 text-base text-center border-[1px]
                max-[500px]:block max-[500px]:w-full
                max-[500px]:pl-[50%] max-[500px]:text-left max-[500px]:relative
                max-[500px]:before:absolute max-[500px]:before:left-0 max-[500px]:before:w-[50%] 
                max-[500px]:before:pl-4 max-[500px]:before:text-base 
                max-[500px]:before:text-left max-[500px]:before:content-[attr(data-label)] max-[500px]:before:font-bold"
                >
                  {item.service}
                </td>
                <td
                  key={item.amount + "item.amount"}
                  data-label="Price"
                  className="px-4 py-3 text-base text-center border-[1px]
                max-[500px]:block max-[500px]:w-full
                max-[500px]:pl-[50%] max-[500px]:text-left max-[500px]:relative
                max-[500px]:before:absolute max-[500px]:before:left-0 max-[500px]:before:w-[50%] 
                max-[500px]:before:pl-4 max-[500px]:before:text-base 
                max-[500px]:before:text-left max-[500px]:before:content-[attr(data-label)] max-[500px]:before:font-bold"
                >
                  {item.amount}
                </td>
                <td
                  key={item.tip + "" + idx}
                  data-label="Tip"
                  className="px-4 py-3 text-base text-center border-[1px]
                max-[500px]:block max-[500px]:w-full
                max-[500px]:pl-[50%] max-[500px]:text-left max-[500px]:relative
                max-[500px]:before:absolute max-[500px]:before:left-0 max-[500px]:before:w-[50%] 
                max-[500px]:before:pl-4 max-[500px]:before:text-base 
                max-[500px]:before:text-left max-[500px]:before:content-[attr(data-label)] max-[500px]:before:font-bold"
                >
                  {item.tip}
                </td>
                <td
                  key={item.paymentMethod + "" + idx}
                  data-label="Payment"
                  className="px-4 py-3 text-base text-center border-[1px]
                max-[500px]:block max-[500px]:w-full
                max-[500px]:pl-[50%] max-[500px]:text-left max-[500px]:relative
                max-[500px]:before:absolute max-[500px]:before:left-0 max-[500px]:before:w-[50%] 
                max-[500px]:before:pl-4 max-[500px]:before:text-base 
                max-[500px]:before:text-left max-[500px]:before:content-[attr(data-label)] max-[500px]:before:font-bold"
                >
                  {item.paymentMethod}
                </td>
                <td
                  key={item.id + "Artist" + idx}
                  data-label="Artist"
                  className="px-4 py-3 text-base text-center border-[1px]
                max-[500px]:block max-[500px]:w-full
                max-[500px]:pl-[50%] max-[500px]:text-left max-[500px]:relative
                max-[500px]:before:absolute max-[500px]:before:left-0 max-[500px]:before:w-[50%] 
                max-[500px]:before:pl-4 max-[500px]:before:text-base 
                max-[500px]:before:text-left max-[500px]:before:content-[attr(data-label)] max-[500px]:before:font-bold"
                >
                  {Math.round(amountWithPercent)}
                </td>
                <td
                  key={item.amount + "Salon" + idx}
                  data-label="Salon"
                  className="px-4 py-3 text-base text-center border-[1px]
                max-[500px]:block max-[500px]:w-full
                max-[500px]:pl-[50%] max-[500px]:text-left max-[500px]:relative
                max-[500px]:before:absolute max-[500px]:before:left-0 max-[500px]:before:w-[50%] 
                max-[500px]:before:pl-4 max-[500px]:before:text-base 
                max-[500px]:before:text-left max-[500px]:before:content-[attr(data-label)] max-[500px]:before:font-bold"
                >
                  {Math.round(item.amount - amountWithPercent)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
