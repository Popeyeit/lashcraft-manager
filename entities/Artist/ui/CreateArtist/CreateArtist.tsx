"use client";
import React from "react";

import { Modal } from "@/shared/ui/Modal/Modal";
import { useModal, useUser } from "@/shared/model/store";

type CreateArtistProps = {
  children: React.ReactElement;
  isAdminShowed?: boolean;
};

export const CreateArtist = ({
  children,
  isAdminShowed,
}: CreateArtistProps) => {
  const [isOpen, handleCloseModal, handleOpenModal] = useModal((state) => [
    state.isOpen,
    state.closeModal,
    state.openModal,
  ]);
  const [user] = useUser((state) => [state.user]);
  return (
    <>
      {isAdminShowed && user?.role === "ADMIN" && ""}
      <button
        type="button"
        onClick={handleOpenModal}
        className="hover:scale-110 ease-linear duration-300 fixed bottom-[120px] right-10 rounded-[50%] bg-primary w-[60px] h-[60px] text-[34px] leading-[60px] text-white"
      >
        +
      </button>
      {isOpen && <Modal onCloseModal={handleCloseModal}>{children}</Modal>}
    </>
  );
};
