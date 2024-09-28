import React from "react";

interface CommentProps {
  user_name: string;
  text: string;
  created_at: string;
}

const Comment: React.FC<CommentProps> = ({ user_name, text, created_at }) => {
  return (
    <div className="border-slate-200 border px-2 rounded mt-2">
      <p className="font-semibold font-montserrat">{user_name}</p>
      <p className="text-gray-400 text-xs">
        {new Date(created_at).toLocaleString()}
      </p>
      <p className="text-gray-600 text-sm font-lora">{text}</p>
    </div>
  );
};

// Memoize the Comment component
export default React.memo(Comment);
