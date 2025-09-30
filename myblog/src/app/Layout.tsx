import { lazy } from "react";

const HomePage = lazy(() => import("@/features/posts/pages/HomePage"));
const BlogListPage = lazy(() => import("@/features/posts/pages/BlogListPage"));
const PostViewPage = lazy(() => import("@/features/posts/pages/PostViewPage"));

export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/blog", element: <BlogListPage /> },
  { path: "/post/:id", element: <PostViewPage /> },
];
