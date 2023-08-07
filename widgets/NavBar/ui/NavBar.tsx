import { Navigation } from "@/features/Navigation";
import React from "react";

export const NavBar = () => {
  return (
    <div className="px-5 py-2 bg-white">
      <nav className="flex justify-center">
        <Navigation></Navigation>
      </nav>
    </div>
  );
};
