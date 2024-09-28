import { formatDistanceToNow } from "date-fns";
import React from "react";

interface CommentProps {
  user_name: string;
  text: string;
  created_at: string;
}

const Comment: React.FC<CommentProps> = ({ user_name, text, created_at }) => {
  const timeAgo = formatDistanceToNow(new Date(created_at), {
    addSuffix: true,
  });

  return (
    <div className="border-slate-200 border px-2 rounded mt-2">
      {/* Flex container with space between user_name and timeAgo */}
      <div className="flex justify-between items-center">
        <p className="font-semibold font-montserrat text-sm">{user_name}</p>
        <p className="text-gray-400 text-xs">{timeAgo}</p>
      </div>
      <p className="text-gray-600 text-sm font-lora">{text}</p>
    </div>
  );
};

// Memoize the Comment component
export default React.memo(Comment);
