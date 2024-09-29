"use client";
import React from "react";
import { useAuth } from "@/hooks/useAuth";
import NavBar from "@/components/NavBar"; // Import the Navbar component
import LikedFeed from "@/components/LikedFeed";

const LikedPostsPage: React.FC = () => {
  useAuth();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar at the top */}
      <NavBar />

      {/* Main content - take full height */}
      <div className="flex-grow flex justify-center w-full">
        <div className="w-full sm:w-1/2 md:w-1/3">
          <LikedFeed />
        </div>
      </div>
    </div>
  );
};

export default LikedPostsPage;
