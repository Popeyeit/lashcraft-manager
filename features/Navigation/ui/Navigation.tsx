"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { links } from "../model/links";
import Link from "next/link";

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <ul className="flex justify-between w-full">
      {links.map((link) => {
        return (
          <li
            key={link.label}
            className={`${pathname === link.href ? "bg-primary" : "bg-bgLink"}
            text-white
            cursor-pointer
            flex items-start justify-center
            hover:bg-primary
            hover:scale-110
            ease-in duration-300
            h-[70px]
            w-[70px]`}
          >
            <Link
              href={link.href}
              className={`text-[44px] w-full h-full flex justify-center items-center`}
            >
              <link.icon />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
