import APIResponse from "@/libs/types/api";
import { PostComment } from "@/libs/types/dto/post";
import { NextResponse } from "next/server";

export async function GET(
  _request: Request,
  params: { params: Promise<{ id: number }> }
) {
  const { id } = await params.params;
  return NextResponse.json<APIResponse<PostComment[]>>({
    data: [
      {
        id: 1,
        content: "Comment 1",
        postId: id,
        user: {
          id: 1,
          name: "User 1",
        },
        lastFetched: new Date().toISOString(),
      },
    ],
  });
}
