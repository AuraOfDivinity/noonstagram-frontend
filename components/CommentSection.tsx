// src/components/CommentSection.tsx
import React, { useState } from "react";
import CommentItem from "./Comment";
import { Comment } from "@/types/comment.types";
import { useAppDispatch } from "@/hooks/hooks";
import { submitComment } from "@/app/store/actions/comment.action";

interface CommentSectionProps {
  postId: string;
  comments: Array<Comment>;
}

const CommentSection: React.FC<CommentSectionProps> = ({
  postId,
  comments,
}) => {
  const [commentText, setCommentText] = useState("");
  const dispatch = useAppDispatch();

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(submitComment(postId, commentText));
    setCommentText(""); // Clear input after submitting
  };

  return (
    <div className="mt-4">
      {/* New Comment Input */}
      <form onSubmit={handleCommentSubmit} className="mb-4 flex w-full">
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="border p-2 w-3/4 font-lora text-md rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Add a comment..."
        />

        <button
          type="submit"
          className="p-2 bg-blue-500 text-white font-montserrat w-1/4 rounded-r-md text-sm"
        >
          Comment
        </button>
      </form>

      {/* Existing Comments */}
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          user_name={comment.user_name}
          text={comment.text}
          created_at={comment.created_at}
        />
      ))}
    </div>
  );
};

export default CommentSection;
