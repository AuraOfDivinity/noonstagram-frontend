// src/components/PostFeed.tsx
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/reducers";
import PostItem from "./PostItem";
import { fetchPosts } from "@/app/store/actions/post.actions";
import { useAppDispatch } from "@/hooks/hooks";

const PostFeed: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    posts = [],
    loading,
    error,
  } = useSelector((state: RootState) => state.post);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading posts...</p>;
  }

  return (
    <div className="flex flex-col items-center sm:m-2">
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostFeed;
