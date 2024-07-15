"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "../../../public/logo.jpg";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-bgcolor md:justify-around p-5">
        <div className="navbar flex items-center justify-between px-4 py-3 sm:px-8">
          {/* Logo */}
          <div className="mr-6">
            <Image alt="Logo" src={logoImage} width={75} />
          </div>

          {/* Menu icon/button for small screens */}
          <button
            className="text-[#333333] hover:text-black focus:outline-none block sm:hidden"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Navigation links */}
          <div className="navlinks md:ml-80 hidden sm:flex gap-4 items-center">
            <div className="text-[#333333] hover:text-black cursor-pointer">Home</div>
            <div className="text-[#81868E] hover:text-gray-700 cursor-pointer">About</div>
            <div className="text-[#81868E] hover:text-gray-700 cursor-pointer">Pages</div>
            <div className="text-[#81868E] hover:text-gray-700 cursor-pointer">Blog</div>
            <div className="text-[#81868E] hover:text-gray-700 cursor-pointer">Contact</div>
          </div>

          {/* Get a Quote button */}
          <div className="ml-auto hidden sm:block">
            <Button className="bg-btColor text-white rounded h-8 px-4">GET A QUOTE</Button>
          </div>
        </div>

        {/* Dropdown menu for small screens */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="sm:hidden bg-white shadow-lg mt-2"
            >
              <div className="flex flex-col gap-2 py-2 px-4">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                  className="text-[#333333] hover:text-black cursor-pointer"
                >
                  Home
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="text-[#81868E] hover:text-gray-700 cursor-pointer"
                >
                  About
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="text-[#81868E] hover:text-gray-700 cursor-pointer"
                >
                  Pages
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                  className="text-[#81868E] hover:text-gray-700 cursor-pointer"
                >
                  Blog
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  className="text-[#81868E] hover:text-gray-700 cursor-pointer"
                >
                  Contact
                </motion.div>
              </div>
              <div className="flex justify-center py-2">
                <Button className="bg-btColor text-white rounded h-8 px-4">GET A QUOTE</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
