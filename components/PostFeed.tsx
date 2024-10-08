import React, { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/reducers";
import PostItem from "./PostItem";
import { fetchPosts } from "@/app/store/actions/post.actions";
import { useAppDispatch } from "@/hooks/hooks";
import Lottie from "lottie-react";
import LoadingAnimation from "../app/animations/loading.json";

const PostFeed: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const { posts = [], loading } = useSelector((state: RootState) => state.post);
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
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Lottie className="h-48" loop={true} animationData={LoadingAnimation} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center sm:m-2">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
});
PostFeed.displayName = "PostFeed";

export default PostFeed;
