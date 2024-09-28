"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../store/reducers";
import { login } from "../store/actions/auth.actions";
import { useAppDispatch } from "../hooks/hooks";
import Link from "next/link";

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth); // Access auth state

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login(email, password)); // Dispatch the login action
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h1 className="text-xl font-bold mb-4  font-montserrat">Login</h1>
        <form onSubmit={handleLogin} className="font-nunito">
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 font-montserrat"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="mt-2 text-center">
          <p className="font-nunito text-gray-600">
            Don't have an account?{" "}
            <Link href="/login" className="text-blue-500">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
