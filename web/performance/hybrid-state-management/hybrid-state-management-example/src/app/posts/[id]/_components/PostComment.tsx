"use client";
import { useQuery } from "@tanstack/react-query";
import { PostComment as PostCommentType } from "@/libs/types/dto/post";
import APIResponse from "@/libs/types/api";
import dayjs from "dayjs";

export default function PostComment({ id }: { id: string }) {
  const { data } = useQuery({
    queryKey: ["post comment", id],
    queryFn: async () => {
      const response = await fetch(`/api/post/${id}/comment`, {
        method: "GET",
      });
      return (await response.json()) as APIResponse<PostCommentType[]>;
    },
  });

  const commentCount = data?.data?.length || undefined;

  return (
    <div className="border-t border-black py-2">
      <p className="font-semibold">
        Comments {commentCount && <span>({commentCount})</span>}
      </p>
      <div className="mt-2 space-y-2">
        {data?.data?.map((comment) => (
          <div
            key={comment.id + comment.postId}
            className="rounded-md border border-gray-300 p-2"
          >
            <div className="font-medium">{comment.user.name}</div>
            <time
              dateTime={comment.lastFetched}
              className="text-sm text-gray-500"
            >
              Last fetched{" "}
              {dayjs(comment.lastFetched).format("YYYY-MM-DD HH:mm:ss")}
            </time>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
