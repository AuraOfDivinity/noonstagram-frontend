"use client";
import React from "react";
import PostFeed from "@/components/PostFeed";
import { useAuth } from "@/hooks/useAuth";
import NavBar from "@/components/NavBar"; // Import the Navbar component

const FeedPage: React.FC = () => {
  useAuth();

  return (
    <div className="flex flex-col justify-center min-h-screen bg-gray-100">
      {/* Navbar at the top */}
      <NavBar />

      {/* Main content */}
      <div className="flex flex-grow justify-center w-full">
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3">
          <PostFeed />
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
