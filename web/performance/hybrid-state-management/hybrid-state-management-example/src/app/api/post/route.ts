import APIResponse from "@/libs/types/api";
import { Post } from "@/libs/types/dto/post";
import { NextResponse } from "next/server";

export async function GET() {
  await new Promise((res) => setTimeout(res, 1000));
  return NextResponse.json<APIResponse<Post[]>>({
    data: [
      {
        id: 1,
        name: "Post 1",
        description: "Description 1",
      },
      {
        id: 2,
        name: "Post 2",
        description: "Description 2",
      },
      {
        id: 3,
        name: "Post 3",
        description: "Description 3",
      },
      {
        id: 4,
        name: "Post 4",
        description: "Description 4",
      },
      {
        id: 5,
        name: "Post 5",
        description: "Description 5",
      },
    ],
  });
}
