"use client";
import React from "react";
import PostFeed from "@/components/PostFeed";
import { useAuth } from "@/hooks/useAuth";

const FeedPage: React.FC = () => {
  useAuth();
  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="w-full sm:w-1/2 md:w-1/3">
        <h1 className="text-2xl font-bold my-6 font-lora text-center">Feed</h1>
        <PostFeed />
      </div>
    </div>
  );
};

export default FeedPage;
