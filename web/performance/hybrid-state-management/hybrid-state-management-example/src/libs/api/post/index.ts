import APIResponse from "@/libs/types/api";
import { Post } from "@/libs/types/dto/post";
import { PostDetail } from "@/libs/types/dto/post";
import { queryOptions } from "@tanstack/react-query";

const getPosts = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/post`, {
    method: "GET",
  });
  return (await response.json()) as APIResponse<Post[]>;
};

const getPostsQueryOptions = () => {
  return queryOptions({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });
};

const getPostDetail = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/post/${id}`,
    {
      method: "GET",
    }
  );
  const res: APIResponse<PostDetail> = await response.json();
  return res;
};

const getPostDetailQueryOptions = (postId: string) => {
  return queryOptions({
    queryKey: ["posts", postId],
    queryFn: () => getPostDetail(postId),
  });
};

export {
  getPosts,
  getPostsQueryOptions,
  getPostDetail,
  getPostDetailQueryOptions,
};
