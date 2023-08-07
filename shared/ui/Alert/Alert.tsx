import { useAlert } from "@/shared/model/store";
import React, { useEffect } from "react";
type AlertProps = {
  text: "ERROR" | "SUCCESS" | string;
  classNames?: string;
};
function Alert({ text }: AlertProps) {
  const [isOpen, toggleAlert] = useAlert((state) => [
    state.isOpen,
    state.toggleAlert,
  ]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        toggleAlert("");
      }, 2000);
    }
  }, [isOpen, toggleAlert]);
  return (
    <div
      className={`absolute left-[50%] translate-x-[-50%] top-2 text-center w-[80%] h-[100px] text-white flex items-center justify-center rounded-lg bg-primary
      ${text === "SUCCESS" ? "bg-[#018000]" : "bg-error"}
      `}
    >
      {text}
    </div>
  );
}

export default Alert;
