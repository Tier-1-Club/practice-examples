import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import PostDetail from "./_components/PostDetail";
import PostComment from "./_components/PostComment";
import { getPostDetailQueryOptions } from "@/libs/api/post";
import PostCommentServer from "./_components/PostCommentServer";

const pageData = async (postId: string) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(getPostDetailQueryOptions(postId));

  const dehydratedState = dehydrate(queryClient);
  return {
    dehydratedState,
    queryClient,
  };
};

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const { dehydratedState } = await pageData(id);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="space-y-2">
        <PostDetail id={id} />
        <div className="flex space-x-2 w-full">
          <div className="flex-1 p-2 border border-gray-500 rounded-md">
            <p>Client</p>
            <PostComment id={id} />
          </div>
          <div className="flex-1 p-2 border border-gray-500 rounded-md">
            <p>Server</p>
            <PostCommentServer id={id} />
          </div>
        </div>
      </div>
    </HydrationBoundary>
  );
}
