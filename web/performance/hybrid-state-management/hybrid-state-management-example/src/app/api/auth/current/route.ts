import APIResponse from "@/libs/types/api";
import { CurrentUser } from "@/libs/types/dto/auth";
import { NextResponse } from "next/server";

export async function GET() {
  await new Promise((res) => setTimeout(res, 1000));
  console.log("vao1111111");

  return NextResponse.json<APIResponse<CurrentUser>>({
    data: { id: "mock id", name: "Mock Name" },
  });
}
