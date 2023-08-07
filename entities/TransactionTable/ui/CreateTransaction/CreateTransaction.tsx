"use client";
import React from "react";
import { Modal } from "@/shared/ui/Modal/Modal";
import { useModal } from "@/shared/model/store";

type CreateTransactionProps = {
  children: React.ReactElement;
};

export const CreateTransaction = ({ children }: CreateTransactionProps) => {
  const [isOpen, handleCloseModal, handleOpenModal] = useModal((state) => [
    state.isOpen,
    state.closeModal,
    state.openModal,
  ]);

  return (
    <>
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
