import React from "react";
import { useAppDispatch } from "@/hooks/hooks";
import { likePost } from "@/app/store/actions/post.actions";
import { Post } from "@/types/post.types";
import { formatDistanceToNow } from "date-fns";
import CommentSection from "./CommentSection";

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const dispatch = useAppDispatch();

  const handleLike = () => {
    dispatch(likePost(post.id));
  };

  const createdAt = post.created_at ? new Date(post.created_at) : new Date();
  const timeAgo = formatDistanceToNow(createdAt, { addSuffix: true });

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6 mx-4 sm:mx-0">
      <h2 className="font-semibold text-lg">{post.user_name}</h2>
      <p className="text-gray-500 text-xs">{timeAgo}</p>{" "}
      {/* Smaller text for time ago */}
      <div className="border-t border-gray-300 mt-1">
        <img
          src={post.image_url}
          alt="Post"
          className="w-full h-auto rounded"
        />
      </div>
      <p className="text-gray-500 text-md tracking-tight font-lora">
        {post.description}
      </p>
      <button onClick={handleLike} className="text-red-500 hover:text-red-600">
        ❤️ {post.likes}
      </button>
      {/* Comment Section */}
      <div className="">
        <CommentSection postId={post.id} comments={post.comments} />
      </div>
    </div>
  );
};

export default PostItem;
