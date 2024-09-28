// src/components/PostFeed.tsx
import React, { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/reducers";
import PostItem from "./PostItem";
import { fetchPosts } from "@/app/store/actions/post.actions";
import { useAppDispatch } from "@/hooks/hooks";

const PostFeed: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const {
    posts = [],
    loading,
    error,
  } = useSelector((state: RootState) => state.post);

  const { isAuthenticated } = useSelector((state: RootState) => state.auth); // Access auth state

  const fetchPostsIfAuthenticated = useCallback(() => {
    if (isAuthenticated) {
      dispatch(fetchPosts());
    }
  }, [dispatch, isAuthenticated]);

  useEffect(() => {
    fetchPostsIfAuthenticated();
  }, [fetchPostsIfAuthenticated]); // Use the callback in the dependency array

  if (loading) {
    return <p>Loading posts...</p>;
  }

  return (
    <div className="flex flex-col items-center sm:m-2">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
});

export default PostFeed;
