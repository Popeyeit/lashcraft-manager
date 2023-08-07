import { AiTwotoneAppstore } from "react-icons/ai";
import { FaUsers, FaCashRegister } from "react-icons/fa";

export const links = [
  { href: "/", label: "Dashboard", icon: AiTwotoneAppstore },
  {
    href: "/artists",
    label: "Artists",
    icon: FaUsers,
  },

  { href: "/transactions", label: "Transactions", icon: FaCashRegister },
];
