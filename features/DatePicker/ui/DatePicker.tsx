"use client";
import { useArtists, useUser } from "@/shared/model/store";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type PropTypes = {};

export const DatePickerRange = ({}: PropTypes) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [user, getTransactions] = useUser((state) => [
    state.user,
    state.getTransactions,
  ]);
  const [artists, currentIdx] = useArtists((state) => [
    state.artists,
    state.currentIdx,
  ]);
  const handleChangeDate = async (update: any) => {
    if (update[0] && update[1]) {
      console.log("request");

      const data = {
        startDate: update[1],
        endDate: update[0],
        artistId: user.role === "ADMIN" ? artists[currentIdx].id : user.id,
      };
      getTransactions(data);
    }
    setDateRange(update);
  };
  return (
    <DatePicker
      className="block px-2 py-2 mx-auto mb-2 text-center border-2 cursor-pointer"
      placeholderText="07/01/2023 - /07/08/2023"
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update: any) => handleChangeDate(update)}
      withPortal
    />
  );
};
