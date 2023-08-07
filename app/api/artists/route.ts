import { ArtistFormData } from "@/features/ArtistForm/model/types";
import { prisma } from "./../../../prisma/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const artists = await prisma.artist.findMany({
    where: {
      NOT: {
        role: "ADMIN",
      },
    },
  });

  return NextResponse.json(artists);
}

export async function POST(req: Request) {
  const data: ArtistFormData = await req.json();
  const { passwordConfirmation, ...body } = data;
  const res = await prisma.artist.create({
    data: body,
  });

  return NextResponse.json(res);
}
