"use client";
import { SalaryInfo } from "@/entities/SalaryInfo";
import { SalaryBtns } from "@/features/CashierFeatures/idex";
import { useArtists, useUser } from "@/shared/model/store";
import { Tabs } from "@/shared/ui/Tabs/Tabs";
import React, { useEffect } from "react";

export const Cashier = () => {
  const [user, salaries, artist, updateStoreSalaryStatus] = useUser((state) => [
    state.user,
    state.salaries,
    state.artist,
    state.updateStoreSalaryStatus,
  ]);
  const [currentIdx] = useArtists((state) => [state.currentIdx]);
  useEffect(() => {}, [currentIdx]);

  return (
    <div className="px-5 pt-20">
      <Tabs />
      <div>
        {salaries.map((item) => {
          return (
            <SalaryInfo
              key={item.id}
              amountArtist={item.amountArtist}
              amountSalon={item.amountSalon}
              createdAt={item.createdAt}
              updatedAt={item.updatedAt}
              login={artist.login}
            >
              <SalaryBtns
                role={user.role}
                salaryId={item.id}
                artistId={artist.id}
                approveArtist={item.approveArtist}
                approveSalon={item.approveSalon}
                onChangeStatus={updateStoreSalaryStatus}
              />
            </SalaryInfo>
          );
        })}
      </div>
    </div>
  );
};
