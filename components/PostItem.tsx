import React from "react";
import { useAppDispatch } from "@/hooks/hooks";
import { likePost } from "@/app/store/actions/post.actions";
import { Post } from "@/types/post.types";
import { formatDistanceToNow } from "date-fns";
import CommentSection from "./CommentSection";
import LikeButton from "./LikeButton";

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const dispatch = useAppDispatch();

  const createdAt = post.created_at ? new Date(post.created_at) : new Date();
  const timeAgo = formatDistanceToNow(createdAt, { addSuffix: true });

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6 mx-4 sm:mx-0">
      <h2 className="font-semibold font-montserrat tracking-normal text-lg">
        {post.user_name}
      </h2>
      <p className="text-gray-500 text-xs">{timeAgo}</p>{" "}
      <div className="border-t border-gray-300 mt-1">
        <img
          src={post.image_url}
          alt="Post"
          className="w-full h-auto rounded"
        />
      </div>
      <div className="flex justify-between my-2">
        <p className="text-gray-500 text-md tracking-tight font-lora">
          {post.description}
        </p>
        {/* Like Button */}
        <LikeButton postId={post.id} isLiked={post.isLiked} />
      </div>
      {/* Comment Section */}
      <CommentSection postId={post.id} comments={post.comments} />
    </div>
  );
};

export default PostItem;
