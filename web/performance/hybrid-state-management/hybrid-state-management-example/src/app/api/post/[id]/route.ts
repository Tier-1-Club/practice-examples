import APIResponse from "@/libs/types/api";
import { PostDetail } from "@/libs/types/dto/post";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  params: { params: Promise<{ id: number }> }
) {
  const { id } = await params.params;
  return NextResponse.json<APIResponse<PostDetail>>({
    data: {
      id: id,
      name: `Post ${id}`,
      content: `Content ${id}`,
      description: `Description ${id}`,
      lastFetched: new Date().toISOString(),
    },
  });
}
