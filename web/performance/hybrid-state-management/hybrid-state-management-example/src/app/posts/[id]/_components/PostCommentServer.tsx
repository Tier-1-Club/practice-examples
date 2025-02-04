import { PostComment as PostCommentType } from "@/libs/types/dto/post";
import APIResponse from "@/libs/types/api";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";

const componentData = async (id: string) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["post comment", id],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/post/${id}/comment`,
        {
          method: "GET",
        }
      );
      return (await response.json()) as APIResponse<PostCommentType[]>;
    },
  });
  const dehydratedState = dehydrate(queryClient);
  return {
    queryClient,
    dehydratedState,
  };
};

export default async function PostCommentServer({ id }: { id: string }) {
  const { queryClient } = await componentData(id);

  const data: APIResponse<PostCommentType[]> | undefined =
    queryClient.getQueryData(["post comment", id]);

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
