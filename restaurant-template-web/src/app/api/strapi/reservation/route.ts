import { NextResponse } from "next/server";
import { StrapiResponse } from "@/types/strapi";

export async function POST(request: Request) {
  const body = await request.json();

  const res = await fetch(`${process.env.STRAPI_URL}/api/reservations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    body: JSON.stringify({ data: body }),
  });

  if (!res.ok) return NextResponse.error();
  return NextResponse.json(await res.json());
}
