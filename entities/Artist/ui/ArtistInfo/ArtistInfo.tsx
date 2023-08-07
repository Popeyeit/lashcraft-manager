"use client";
import React from "react";
import { data } from "../../model/dataArtist";
import { DatePickerRange } from "@/features/DatePicker";
import { useUser } from "@/shared/model/store";
import { useTotalReport } from "../../lib/hooks/useTotalReport";

export const ArtistInfo = () => {
  const [artist, transactions] = useUser((state) => [
    state.artist,
    state.transactions,
  ]);
  const { tips, salonEarn, artistEarn, paymentMethods } = useTotalReport(
    transactions,
    artist
  );

  return (
    <div>
      <DatePickerRange />
      <table className="w-full border-collapse ">
        <tbody className="block w-full">
          {data.income.map((item, idx) => {
            return (
              <tr
                key={idx}
                className="block w-full mb-4 bg-white even:bg-gray-500"
              >
                <td
                  key="Percent"
                  data-label="Percent"
                  className="px-4 py-3 text-xl text-center border-[1px]
              
        block w-full
        pl-[50%] text-left relative
        before:absolute before:left-0 before:w-[50%] 
        before:pl-4 before:text-xl 
        before:text-left before:content-[attr(data-label)] before:font-bold"
                >
                  {artist.percent}
                </td>
                <td
                  key={transactions.length + 1}
                  data-label="Clients"
                  className="px-4 py-3 text-xl text-center border-[1px]
              
        block w-full
        pl-[50%] text-left relative
        before:absolute before:left-0 before:w-[50%] 
        before:pl-4 before:text-xl 
        before:text-left before:content-[attr(data-label)] before:font-bold"
                >
                  {transactions.length}
                </td>
                <td
                  key={tips}
                  data-label="Tips"
                  className="px-4 py-3 text-xl text-center border-[1px]
              
        block w-full
        pl-[50%] text-left relative
        before:absolute before:left-0 before:w-[50%] 
        before:pl-4 before:text-xl 
        before:text-left before:content-[attr(data-label)] before:font-bold"
                >
                  {Math.round(tips)}
                </td>
                <td
                  key="artist"
                  data-label="Artist"
                  className="px-4 py-3 text-xl text-center border-[1px]
              
        block w-full
        pl-[50%] text-left relative
        before:absolute before:left-0 before:w-[50%] 
        before:pl-4 before:text-xl 
        before:text-left before:content-[attr(data-label)] before:font-bold"
                >
                  {Math.round(artistEarn)}
                </td>
                <td
                  key="salon"
                  data-label="Salon"
                  className="px-4 py-3 text-xl text-center border-[1px]
              
        block w-full
        pl-[50%] text-left relative
        before:absolute before:left-0 before:w-[50%] 
        before:pl-4 before:text-xl 
        before:text-left before:content-[attr(data-label)] before:font-bold"
                >
                  {Math.round(salonEarn)}
                </td>
                <td
                  data-label="Zelle"
                  className="px-4 py-3 text-xl text-center border-[1px] border-black
              bg-primary text-white
        block w-full
        pl-[50%] text-left relative
        before:absolute before:left-0 before:w-[50%] 
        before:pl-4 before:text-xl 
        before:text-left before:content-[attr(data-label)] before:font-bold"
                >
                  {paymentMethods.zelle}
                </td>{" "}
                <td
                  data-label="Cash"
                  className="px-4 py-3 text-xl text-center border-[1px] border-black
              bg-primary text-white
        block w-full
        pl-[50%] text-left relative
        before:absolute before:left-0 before:w-[50%] 
        before:pl-4 before:text-xl 
        before:text-left before:content-[attr(data-label)] before:font-bold"
                >
                  {paymentMethods.cash}
                </td>
                <td
                  data-label="Venmo"
                  className="px-4 py-3 text-xl text-center border-[1px] border-black
              bg-primary text-white
        block w-full
        pl-[50%] text-left relative
        before:absolute before:left-0 before:w-[50%] 
        before:pl-4 before:text-xl 
        before:text-left before:content-[attr(data-label)] before:font-bold"
                >
                  {paymentMethods.venmo}
                </td>
                <td
                  data-label="Card"
                  className="px-4 py-3 text-xl text-center border-[1px] border-black
              bg-primary text-white
        block w-full
        pl-[50%] text-left relative
        before:absolute before:left-0 before:w-[50%] 
        before:pl-4 before:text-xl 
        before:text-left before:content-[attr(data-label)] before:font-bold"
                >
                  {paymentMethods.card}
                </td>
                <td
                  data-label="Total"
                  className="px-4 py-3 text-xl text-center border-[1px] border-black
              bg-primary text-white
        block w-full
        pl-[50%] text-left relative
        before:absolute before:left-0 before:w-[50%] 
        before:pl-4 before:text-xl 
        before:text-left before:content-[attr(data-label)] before:font-bold"
                >
                  {paymentMethods.venmo +
                    paymentMethods.card +
                    paymentMethods.zelle +
                    paymentMethods.cash}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
