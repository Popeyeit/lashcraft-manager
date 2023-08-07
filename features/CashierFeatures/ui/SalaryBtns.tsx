import React from "react";
import { updateSalaryStatus } from "../api/updateSalaryStatus";
import { getSelectBg } from "../lib/functions";
import { SalaryStatusType } from "../lib/types";

export const SalaryBtns = ({
  approveArist,
  approveSalon,
  artistId,
  role,
  salaryId,
  onChangeStatus,
}: {
  approveArist: string;
  approveSalon: string;
  artistId: number;
  role: string;
  salaryId: number;
  onChangeStatus: (data: SalaryStatusType) => void;
}) => {
  const getBtn = (key: string, person: string) => {
    const selectBtn = () => {
      switch (key) {
        case "PENDING":
          return (
            <button
              onClick={() =>
                onChangeStatus({ status: "REQUEST", salaryId, person })
              }
              className="block w-full px-4 py-3 text-white transition-all duration-300 cursor-pointer bg-[#0000FF] font-bold"
            >
              Get Paid
            </button>
          );
        case "REQUEST":
          return (
            <button
              disabled={true}
              className="block w-full px-4 py-3 font-bold text-black transition-all duration-300 cursor-pointer bg-[#FFFF00]
              
              "
            >
              Pending
            </button>
          );

        case "PAID":
          return (
            <button
              disabled={true}
              className="block w-full px-4 py-3 font-bold text-black transition-all duration-300 cursor-pointer bg-[#00FF00] "
            >
              Paid
            </button>
          );

        default:
          return (
            <button
              disabled={true}
              className="block w-full px-4 py-3 font-bold text-white transition-all duration-300 cursor-pointer bg-[#FF0000] "
            >
              Unpaid
            </button>
          );
      }
    };

    const handleSelected = (person: string, approve: string) => {
      if (person === "salon") {
        return approveSalon === approve;
      } else {
        return approveArist === approve;
      }
    };

    return role === "ADMIN" ? (
      <select
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          console.log(e.target.value, artistId, person);

          onChangeStatus({ status: e.target.value, salaryId, person });
        }}
        name={person}
        id=""
        className={`${
          person === "salon"
            ? getSelectBg(approveSalon)
            : getSelectBg(approveArist)
        }
        block w-full px-4 py-4  cursor-pointer  font-bold 
        `}
      >
        <option
          selected={handleSelected(person, "PENDING")}
          disabled
          value="PENDING"
          className="text-lg font-bold text-black bg-white cursor-pointer"
        >
          Pending
        </option>
        <option
          selected={handleSelected(person, "REQUEST")}
          value="REQUEST"
          disabled={true}
          className="text-lg font-bold text-black bg-white cursor-pointer"
        >
          Requested
        </option>
        <option
          selected={handleSelected(person, "PAID")}
          value="PAID"
          disabled={
            person === "salon"
              ? approveSalon === "PAID"
                ? true
                : false
              : approveArist === "PAID"
              ? true
              : false
          }
          className="text-lg font-bold text-black bg-white cursor-pointer"
        >
          {person === "salon"
            ? approveSalon === "PAID"
              ? "Approved"
              : "Approve"
            : approveArist === "PAID"
            ? "Approved"
            : "Approve"}
        </option>
        <option
          selected={handleSelected(person, "UNPAID")}
          value="UNPAID"
          className="text-lg font-bold text-black bg-white cursor-pointer"
        >
          Declined Salary
        </option>
      </select>
    ) : (
      selectBtn()
    );
  };

  return (
    <tr className="max-[500px]:block max-[500px]:w-full max-[500px]:mb-4 bg-white even:bg-gray-500">
      <td
        data-label="Salon"
        className=" text-base text-center border-[1px]
max-[500px]:block max-[500px]:w-full
max-[500px]:pl-[50%] max-[500px]:text-left max-[500px]:relative
max-[500px]:before:absolute max-[500px]:before:left-0 max-[500px]:before:w-[50%] 
max-[500px]:before:pl-4 max-[500px]:before:text-base 
max-[500px]:before:text-left max-[500px]:before:content-[attr(data-label)] max-[500px]:before:font-bold"
      >
        {getBtn(approveSalon, "salon")}
      </td>
      <td
        data-label="Artist"
        className=" text-base text-center border-[1px] 
max-[500px]:block max-[500px]:w-full
max-[500px]:pl-[50%] max-[500px]:text-left max-[500px]:relative
max-[500px]:before:absolute max-[500px]:before:left-0 max-[500px]:before:w-[50%] 
max-[500px]:before:pl-4 max-[500px]:before:text-base 
max-[500px]:before:text-left max-[500px]:before:content-[attr(data-label)] max-[500px]:before:font-bold"
      >
        {getBtn(approveArist, "artist")}
      </td>
    </tr>
  );
};
// корпаративный сайт, каталог,
// возможность встраивания мазагина
// видео
// каталог - оставлять заяку. Реализовать букинг.
