"use client";
import React from "react";
import Link from "next/link";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useAppSelector } from "@/hooks/hooks";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const auth = useAppSelector((state) => state.auth);
  const pathname = usePathname();

  // TODO: handle logic
  const handleLogout = () => {};

  const handleAddPost = () => {};

  return (
    <nav
      className={`bg-white shadow-lg z-10 p-4 flex justify-between items-center 
        fixed bottom-0 left-0 w-full md:relative md:top-0 md:bottom-auto md:sticky`}
    >
      {/* Left Side - Links */}
      <div className="flex space-x-4">
        <Link
          href="/feed"
          className={`font-semibold font-nunito ${
            pathname === "/feed" ? "text-blue-500" : ""
          }`}
        >
          Feed
        </Link>
        <Link
          href="/feed/liked"
          className={`font-semibold font-nunito ${
            pathname === "/feed/liked" ? "text-blue-500" : ""
          }`}
        >
          Liked
        </Link>
      </div>

      {/* Center - Add Post */}
      <div className="cursor-pointer" onClick={handleAddPost}>
        <AiOutlinePlusCircle size={32} className="text-blue-500" />
      </div>

      {/* Right Side - User Info & Logout */}
      <div className="flex space-x-4 items-center">
        <span className="font-lora">{`nileshi@gmail.com`}</span>
        <button
          onClick={handleLogout}
          className="text-sm font-semibold font-nunito text-red-500 hover:text-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
