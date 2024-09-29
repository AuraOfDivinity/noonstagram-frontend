import React, { useState } from "react";
import withPopup from "@/app/hoc/withPopup";
import { AiFillHeart } from "react-icons/ai"; // Importing AiFillHeart icon
import LikeButton from "./LikeButton";
import { useAppDispatch } from "@/hooks/hooks";
import { unlikePost } from "@/app/store/actions/post.actions";

interface LikedImageProps {
  id: number;
  imageUrl: string;
  // onUnlike: (id: number) => void; // Function to handle unliking the post
}

const LikedImage: React.FC<LikedImageProps> = ({ id, imageUrl }) => {
  const [isUnlikePopupVisible, setUnlikePopupVisible] = useState(false);
  const dispatch = useAppDispatch();

  const handleUnlikeClick = () => {
    setUnlikePopupVisible(true); // Show the popup
  };

  const confirmUnlike = () => {
    dispatch(unlikePost(id));
    setUnlikePopupVisible(false); // Close the popup
  };

  const cancelUnlike = () => {
    setUnlikePopupVisible(false); // Just close the popup
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
        <AiFillHeart className="text-red-500 h-6 w-6" />
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

// Create a Popup for unlike confirmation
const UnlikePopup = withPopup(() => null); // Using the withPopup HOC

export default LikedImage;
