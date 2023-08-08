import React from "react";
import { ArtistInfo, CreateArtist } from "@/entities/Artist";
import { Tabs } from "@/shared/ui/Tabs/Tabs";
import { ArtistForm } from "@/features/ArtistForm";

export const Artist = () => {
  return (
    <div className="pt-10">
      <Tabs />
      <CreateArtist isAdminShowed>
        <ArtistForm />
      </CreateArtist>
      <ArtistInfo />
    </div>
  );
};
