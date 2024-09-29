import React, { useState } from "react";
import withPopup from "@/app/hoc/withPopup";
import { AiFillHeart } from "react-icons/ai";
import { useAppDispatch } from "@/hooks/hooks";
import { unlikePost } from "@/app/store/actions/post.actions";

interface LikedImageProps {
  id: number;
  imageUrl: string;
}

const LikedImage: React.FC<LikedImageProps> = ({ id, imageUrl }) => {
  const [isUnlikePopupVisible, setUnlikePopupVisible] = useState(false);
  const dispatch = useAppDispatch();

  const handleUnlikeClick = () => {
    setUnlikePopupVisible(true);
  };

  const confirmUnlike = () => {
    dispatch(unlikePost(id));
    setUnlikePopupVisible(false);
  };

  const cancelUnlike = () => {
    setUnlikePopupVisible(false);
  };

  return (
    <div className="relative overflow-hidden rounded-lg border-slate-300 border">
      <img
        src={imageUrl}
        alt={`Liked Post ${id}`}
        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-125"
      />
      {/* Heart Icon at the bottom right */}
      <button
        onClick={handleUnlikeClick}
        className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow-lg"
      >
        <AiFillHeart className="text-red-500 h-6 w-6 transition-transform duration-300 hover:scale-110" />
        {/* Scale on hover */}
      </button>

      {/* Popup for confirming unlike */}
      {isUnlikePopupVisible && (
        <UnlikePopup
          title="Confirm Unlike"
          message="Are you sure you want to unlike this post?"
          onConfirm={confirmUnlike}
          onCancel={cancelUnlike}
        />
      )}
    </div>
  );
};

const UnlikePopup = withPopup(() => null);

export default LikedImage;
