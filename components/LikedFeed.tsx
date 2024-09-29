import React, { useCallback, useEffect } from "react";

import LikedImage from "@/components/LikedImage"; // Import the new component
import { fetchLikedPosts } from "@/app/store/actions/post.actions";
import { RootState } from "@/app/store/reducers";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import Lottie from "lottie-react";
import LoadingAnimation from "../app/animations/loading.json";

const LikedFeed: React.FC = () => {
  const dispatch = useAppDispatch();
  const { likedPosts, loading, error } = useAppSelector(
    (state: RootState) => state.post
  );
  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth);

  const fetchPostsIfAuthenticated = useCallback(() => {
    if (isAuthenticated) {
      dispatch(fetchLikedPosts());
    }
  }, [dispatch, isAuthenticated]);

  useEffect(() => {
    fetchPostsIfAuthenticated();
  }, [fetchPostsIfAuthenticated]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Lottie className="h-48" loop={true} animationData={LoadingAnimation} />
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-2 gap-2 p-4">
      {likedPosts.map((post) => (
        <LikedImage key={post.id} imageUrl={post.image_url} id={post.id} />
      ))}
    </div>
  );
};

export default LikedFeed;
