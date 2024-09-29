"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { usePathname } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import LogoutPopup from "./LogoutPopup"; // Import the LogoutPopup
import { logout } from "@/app/store/actions/auth.actions";
import { useRouter } from "next/navigation";
import CreatePostPopup from "./CreatePostPopup";

interface DecodedToken {
  email: string;
}

const Navbar: React.FC = () => {
  const { token } = useAppSelector((state) => state.auth);
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isLogoutPopupVisible, setLogoutPopupVisible] = useState(false);
  const [isCreatePostPopupVisible, setCreatePostPopupVisible] = useState(false);

  const getEmailFromToken = () => {
    try {
      if (token) {
        const decoded: DecodedToken = jwtDecode(token);
        return decoded.email;
      }
    } catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
  };

  const email = getEmailFromToken();

  const handleLogout = () => {
    setLogoutPopupVisible(true);
  };

  const confirmLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  const cancelLogout = () => {
    setLogoutPopupVisible(false);
  };

  const handleAddPost = () => {
    setCreatePostPopupVisible(true);
  };

  const closeCreatePostPopup = () => {
    setCreatePostPopupVisible(false);
  };

  return (
    <>
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
        {/* Right Side - User Info & Logout */}
        <div className="flex space-x-4 items-center">
          <div className="cursor-pointer" onClick={handleAddPost}>
            <AiOutlinePlusCircle size={32} className="text-blue-500" />
          </div>
          <span className="font-lora">{email || ""}</span>
          <button
            onClick={handleLogout}
            className="text-sm font-semibold font-nunito text-red-500 hover:text-red-600"
          >
            Logout
          </button>
        </div>
      </nav>
      {/* Logout Confirmation Popup */}
      {isLogoutPopupVisible && (
        <LogoutPopup
          title="Confirm Logout"
          message="Are you sure you want to logout?"
          onConfirm={confirmLogout}
          onCancel={cancelLogout}
        />
      )}

      {isCreatePostPopupVisible && (
        <CreatePostPopup
          title="Create New Post" // Set title
          message="Fill in the details to create a new post." // Set message
          onConfirm={closeCreatePostPopup} // onConfirm can be a close function or any action you want
          onCancel={closeCreatePostPopup} // Pass the onCancel function
          displayButtons={false}
        />
      )}
    </>
  );
};

export default Navbar;
