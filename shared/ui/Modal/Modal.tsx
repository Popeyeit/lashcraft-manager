import React from "react";
import { IoMdClose } from "react-icons/io";

type ModalProps = {
  children: React.ReactElement;
  onCloseModal: () => void;
};

export const Modal = ({ children, onCloseModal }: ModalProps) => {
  return (
    <div className="fixed top-0 left-0 z-10 w-full h-full overflow-hidden">
      <div className="absolute w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white py-10 px-10 w-[80%] h-[80%] rounded-xl">
        <IoMdClose
          className="absolute right-3 top-3  text-[30px] cursor-pointer"
          onClick={onCloseModal}
        />
        {children}
      </div>
    </div>
  );
};
