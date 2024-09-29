import React, { useState } from "react";
import { useAppDispatch } from "@/hooks/hooks";
import { likePost, unlikePost } from "@/app/store/actions/post.actions";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface LikeButtonProps {
  postId: number;
  isLiked: boolean;
}

const LikeButton: React.FC<LikeButtonProps> = ({ postId, isLiked }) => {
  const dispatch = useAppDispatch();
  const [isScaling, setIsScaling] = useState(false);

  const handleLike = () => {
    if (!isLiked) {
      dispatch(likePost(postId));
    } else {
      dispatch(unlikePost(postId));
    }
    setIsScaling(true);
    setTimeout(() => {
      setIsScaling(false);
    }, 300);
  };

  return (
    <button
      onClick={handleLike}
      className={`text-red-500 hover:text-red-600 transition-transform duration-300 ${
        isScaling ? "scale-125" : "scale-100"
      }`}
    >
      {isLiked ? <AiFillHeart size={28} /> : <AiOutlineHeart size={28} />}
    </button>
  );
};

export default React.memo(LikeButton);
