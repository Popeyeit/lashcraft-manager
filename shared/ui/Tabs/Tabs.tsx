"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { useArtists, useUser } from "@/shared/model/store";

export const Tabs = () => {
  const [artists, currentIdx, fetchArtists, setCurrentIdx] = useArtists(
    (state) => [
      state.artists,
      state.currentIdx,
      state.fetchArtists,
      state.setCurrentIdx,
    ]
  );
  const [user, changeArtist] = useUser((state) => [
    state.user,
    state.changeArtist,
  ]);

  useEffect(() => {
    if (!artists.length && user.login && user.role === "ADMIN") {
      fetchArtists();
    }
  }, [user, fetchArtists]);
  useEffect(() => {
    if (artists.length) {
      changeArtist(artists[currentIdx]);
    }
  }, [artists, currentIdx, changeArtist]);
  const handleChangeIdx = (idx: number) => {
    setCurrentIdx(idx);
  };
  return (
    <>
      {user?.role === "ADMIN" && (
        <div className="flex flex-wrap justify-center w-full mb-2 space-x-2">
          {artists.length > 0 &&
            artists.map((tab, idx) => {
              return (
                <Button
                  key={tab.login}
                  text={tab.login}
                  onClick={() => handleChangeIdx(idx)}
                  className={`w-[100px] border-2 rounded-lg min-h-[40px] text-white bg-bgLink hover:bg-primary ${
                    idx === currentIdx ? "bg-primary" : "bg-bgLink"
                  }
            transition-all duration-300
            `}
                />
              );
            })}
        </div>
      )}
    </>
  );
};
