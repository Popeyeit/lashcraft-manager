"use client";
import React from "react";

type SalaryInfoProps = {
  children: React.ReactElement;
  login: string;
  amountSalon: number;
  amountArist: number;
  createdAt: string;
  updatedAt: string;
};

export const SalaryInfo = ({
  children,
  login,
  amountArist,
  amountSalon,
  createdAt,
  updatedAt,
}: SalaryInfoProps) => {
  return (
    <table className="w-full mb-5 border-collapse">
      <thead className="max-[500px]:hidden">
        <tr>
          <th className="px-4 py-3 text-base text-center text-white border-[1px] bg-primary">
            Name
          </th>
          <th className="px-4 py-3 text-base text-center text-white border-[1px] bg-primary">
            Salon
          </th>
          <th className="px-4 py-3 text-base text-center text-white border-[1px] bg-primary">
            Artist
          </th>
          <th className="px-4 py-3 text-base text-center text-white border-[1px] bg-primary">
            Date
          </th>
        </tr>
      </thead>
      <tbody className="max-[500px]:block max-[500px]:w-full">
        <tr className="max-[500px]:block max-[500px]:w-full max-[500px]:mb-4 bg-white even:bg-gray-500">
          <td
            rowSpan={2}
            data-label="Name"
            className="px-4 py-3 text-base text-center border-[1px]
max-[500px]:block max-[500px]:w-full
max-[500px]:pl-[50%] max-[500px]:text-left max-[500px]:relative
max-[500px]:before:absolute max-[500px]:before:left-0 max-[500px]:before:w-[50%] 
max-[500px]:before:pl-4 max-[500px]:before:text-base 
max-[500px]:before:text-left max-[500px]:before:content-[attr(data-label)] max-[500px]:before:font-bold"
          >
            {login}
          </td>
          <td
            data-label="Salon"
            className="px-4 py-3 text-base text-center border-[1px]
max-[500px]:block max-[500px]:w-full
max-[500px]:pl-[50%] max-[500px]:text-left max-[500px]:relative
max-[500px]:before:absolute max-[500px]:before:left-0 max-[500px]:before:w-[50%] 
max-[500px]:before:pl-4 max-[500px]:before:text-base 
max-[500px]:before:text-left max-[500px]:before:content-[attr(data-label)] max-[500px]:before:font-bold"
          >
            {amountSalon}
          </td>
          <td
            data-label="Artist"
            className="px-4 py-3 text-base text-center border-[1px]
max-[500px]:block max-[500px]:w-full
max-[500px]:pl-[50%] max-[500px]:text-left max-[500px]:relative
max-[500px]:before:absolute max-[500px]:before:left-0 max-[500px]:before:w-[50%] 
max-[500px]:before:pl-4 max-[500px]:before:text-base 
max-[500px]:before:text-left max-[500px]:before:content-[attr(data-label)] max-[500px]:before:font-bold"
          >
            {amountArist}
          </td>
          <td
            rowSpan={2}
            data-label="Date"
            className="px-4 py-3 text-base text-center border-[1px]
max-[500px]:block max-[500px]:w-full
max-[500px]:pl-[50%] max-[500px]:text-left max-[500px]:relative
max-[500px]:before:absolute max-[500px]:before:left-0 max-[500px]:before:w-[50%] 
max-[500px]:before:pl-4 max-[500px]:before:text-base 
max-[500px]:before:text-left max-[500px]:before:content-[attr(data-label)] max-[500px]:before:font-bold"
          >
            {new Date(createdAt).toDateString() +
              " - " +
              new Date(updatedAt).toDateString()}
          </td>
        </tr>
        {children}
      </tbody>
    </table>
  );
};
