import { prisma } from "../../../prisma/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data: { artistId: number } = await req.json();
  const salaryData = {
    amountArist: 0,
    amountSalon: 0,
    artistId: data.artistId,
  };
  const salary = await prisma.salary.create({
    data: salaryData,
  });

  return NextResponse.json(salary);
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("artistId");
  const artistId = Number(id);
  const salaries = await prisma.salary.findMany({
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
    where: {
      artistId,
    },
  });

  return NextResponse.json(salaries);
}

export async function PUT(req: Request) {
  const data = await req.json();
  const salary = await prisma.salary.findUnique({
    where: {
      id: data.salaryId,
    },
  });

  const amountWithPercent = (data.transaction.amount / 100) * data.percent;

  const newAmountArtist = Math.round(
    salary?.amountArist + (data.transaction.tip + amountWithPercent)
  );
  const newAmountSalon = Math.round(
    (salary?.amountSalon as number) +
      (data.transaction.amount - amountWithPercent)
  );
  const updatedSalary = await prisma.salary.update({
    where: {
      id: data.salaryId,
    },
    data: {
      amountArist: newAmountArtist,
      amountSalon: newAmountSalon,
    },
  });
  return NextResponse.json(updatedSalary);
}
