import { NavBar } from "@/widgets/NavBar";
import "./styles/globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/widgets/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lash Craft House",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#FCFAF1]`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          <div className="flex flex-col flex-wrap flex-1 px-5 pb-[200px]">
            {children}
          </div>
          <NavBar />
        </div>
      </body>
    </html>
  );
}
