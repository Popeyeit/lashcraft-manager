import { prisma } from "./../../../prisma/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  const artist = await prisma.artist.findUnique({
    where: {
      login: data.login,
    },
  });

  if (artist && artist.password === data.password) {
    return NextResponse.json(artist);
  }
}
