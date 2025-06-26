"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const toggleMode = () => setIsLogin(!isLogin);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(isLogin ? "Logged In!" : "Account Created!");
    }, 1500); // Simulated response
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] flex items-center justify-center px-4">
      <div className="relative w-full max-w-5xl h-[580px] overflow-hidden rounded-2xl bg-[#1a1a1a] border border-purple-900/40 shadow-xl flex flex-col md:flex-row">
        {/* Welcome Panel */}
        <motion.div
          animate={{ x: isLogin ? 0 : "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="hidden md:flex absolute top-0 left-0 w-1/2 h-full bg-gradient-to-tr from-purple-700/40 to-indigo-700/40 text-white p-12 z-20 flex-col justify-center items-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? "loginText" : "signupText"}
              initial={{ opacity: 0, x: isLogin ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isLogin ? 30 : -30 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-3">
                {isLogin ? "Welcome Back" : "Join the Revolution"}
              </h2>
              <p className="text-gray-200 text-sm max-w-sm leading-relaxed">
                {isLogin
                  ? "Log in to access your AI-powered threat control panel."
                  : "Sign up to enter a smarter, more secure world."}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Form Panel */}
        <motion.div
          animate={{ x: isLogin ? "100%" : "0%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full md:w-1/2 h-full p-10 z-10 flex items-center justify-center bg-[#0f0f0f]"
        >
          <AnimatePresence mode="wait">
            <motion.form
              key={isLogin ? "login" : "signup"}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md space-y-5"
            >
              <h2 className="text-white text-3xl font-semibold">
                {isLogin ? "Login" : "Get Started"}
              </h2>

              {/* Username */}
              <div className="relative">
                <FaUser className="absolute top-3 left-3 text-purple-400" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Username"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#1e1e1e] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              {/* Email (signup only) */}
              {!isLogin && (
                <div className="relative">
                  <FaEnvelope className="absolute top-3 left-3 text-purple-400" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#1e1e1e] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  />
                </div>
              )}

              {/* Password */}
              <div className="relative">
                <FaLock className="absolute top-3 left-3 text-purple-400" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#1e1e1e] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-xl text-white font-bold transition ${
                  loading
                    ? "bg-purple-900 cursor-not-allowed"
                    : "bg-purple-700 hover:bg-purple-600"
                }`}
              >
                {loading
                  ? isLogin
                    ? "Logging in..."
                    : "Creating..."
                  : isLogin
                  ? "Log In Securely"
                  : "Create Secure Account"}
              </button>

              <p className="text-sm text-gray-400 text-center">
                {isLogin ? "New here?" : "Already a user?"}{" "}
                <button
                  onClick={toggleMode}
                  type="button"
                  className="text-purple-400 underline hover:text-purple-200"
                >
                  {isLogin ? "Create account" : "Log in"}
                </button>
              </p>
            </motion.form>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
