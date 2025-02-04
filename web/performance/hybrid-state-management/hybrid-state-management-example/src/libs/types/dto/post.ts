interface Post {
  id: number;
  name: string;
  description: string;
}

interface PostDetail extends Post {
  content: string;
  lastFetched: string;
}

interface PostComment {
  id: number;
  content: string;
  postId: Post["id"];
  user: {
    id: number;
    name: string;
  };
  lastFetched: string;
}

export type { Post, PostDetail, PostComment };
