import { getPostsQueryOptions } from "@/libs/api/post";
import PostList from "./_components/Posts";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const pageData = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(getPostsQueryOptions());
  const dehydratedState = dehydrate(queryClient);
  return {
    queryClient,
    dehydratedState,
  };
};

export default async function Page() {
  const { dehydratedState } = await pageData();

  return (
    <HydrationBoundary state={dehydratedState}>
      <PostList />
    </HydrationBoundary>
  );
}
