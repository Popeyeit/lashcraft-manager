"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useAlert, useUser } from "@/shared/model/store";
import Image from "next/image";
import logo from "../assets/lashcraft_logo.png";
import Alert from "@/shared/ui/Alert/Alert";
type HeaderProps = {
  children?: React.ReactElement;
};

export const Header = ({ children }: HeaderProps) => {
  const [user, logOut, getUser] = useUser((state) => [
    state.user,
    state.logOut,
    state.getUser,
  ]);
  const [isOpen, textAlert] = useAlert((state) => [
    state.isOpen,
    state.textAlert,
  ]);
  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <header className="h-[80px]  px-5 bg-white w-full relative">
      {isOpen && <Alert text={textAlert} />}

      <div className="flex items-center justify-between w-full">
        <Link className="w-[120px] h-[80px]" href="/">
          <Image src={logo} alt="logo" />
        </Link>
        {user.login && (
          <span className="text-lg font-bold uppercase">{user.login}</span>
        )}
        {user.login ? (
          <Link
            className="cursor-pointer w-[180px]  border-2 block text-center py-2 bg-primary text-white font-bold rounded-sm hover:scale-110 transition-all duration-300"
            href="#"
            onClick={() => {
              logOut();
            }}
          >
            Sign Out
          </Link>
        ) : (
          <Link
            href="/signin"
            className="cursor-pointer w-[180px]  border-2 block text-center py-2 bg-primary text-white font-bold rounded-sm hover:scale-110 transition-all duration-300"
          >
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
};
