import { Salary } from "@prisma/client";
import { prisma } from "../../../../prisma/prisma";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  const data = await req.json();

  const approveArtist = data.person === "artist";
  let updatedSalary: Salary;
  if (approveArtist) {
    updatedSalary = await prisma.salary.update({
      where: {
        id: data.salaryId,
      },
      data: {
        approveArtist: data.status as "PENDING" | "REQUEST" | "PAID" | "UNPAID",
      },
    });
  } else {
    updatedSalary = await prisma.salary.update({
      where: {
        id: data.salaryId,
      },
      data: {
        approveSalon: data.status as "PENDING" | "REQUEST" | "PAID" | "UNPAID",
      },
    });
  }

  return NextResponse.json(updatedSalary);
}
