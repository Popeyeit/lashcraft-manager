import { prisma } from "./../../../prisma/prisma";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  const data = await req.json();
  const transactions = await prisma.transaction.findMany({
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
    where: {
      artistId: data.artistId,
      createdAt: {
        lte: data.startDate,
        gte: data.endDate,
      },
    },
  });

  return NextResponse.json(transactions);
}

export async function POST(req: Request) {
  const data = await req.json();
  const transactions = await prisma.transaction.create({ data });
  return NextResponse.json(transactions);
}
