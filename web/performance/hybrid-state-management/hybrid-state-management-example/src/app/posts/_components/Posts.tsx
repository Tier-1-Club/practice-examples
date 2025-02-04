"use client";
import { getPostsQueryOptions } from "@/libs/api/post";
import { Post } from "@/libs/types/dto/post";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function PostList() {
  const { data } = useQuery(getPostsQueryOptions());
  return (
    <div className="grid grid-cols-2 gap-4">
      {data?.data.map((post: Post) => (
        <Link
          key={post.id}
          className="border border-gray-500 rounded-md p-4"
          href={`/posts/${post.id}`}
        >
          <h3>{post.name}</h3>
          <p>{post.description}</p>
        </Link>
      ))}
    </div>
  );
}
