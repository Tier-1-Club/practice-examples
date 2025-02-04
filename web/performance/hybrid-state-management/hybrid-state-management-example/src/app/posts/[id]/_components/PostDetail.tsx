"use client";
import { getPostDetailQueryOptions } from "@/libs/api/post";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";

export default function PostDetail({ id }: { id: string }) {
  const { data, refetch } = useQuery(getPostDetailQueryOptions(id));

  const handleRefreshClick = () => {
    refetch();
  };
  if (!data) return null;
  return (
    <div className="relative">
      <button
        className="absolute right-0 border border-gray-400 rounded-md p-1"
        onClick={handleRefreshClick}
      >
        Refresh
      </button>
      <h2 className="font-semibold">{data.data.name}</h2>
      <time dateTime={data.data.lastFetched} className="text-sm text-gray-500">
        Last fetched{" "}
        {dayjs(data.data.lastFetched).format("YYYY-MM-DD HH:mm:ss")}
      </time>
      <p>{data?.data.content}</p>
    </div>
  );
}
