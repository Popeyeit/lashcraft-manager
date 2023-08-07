import { ReactNode, DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text?: string;
  className?: string;
}

export const Button = ({ text, className, ...props }: ButtonProps) => {
  return (
    <button type="button" className={`cursor-pointer ${className}`} {...props}>
      {text}
    </button>
  );
};
