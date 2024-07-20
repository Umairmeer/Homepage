"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "../../../public/logo.jpg";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const pathname = usePathname()

  useEffect(() => {
    console.log(pathname)
  }, [])

  return (
    <>
      <div className="bg-bgcolor md:justify-around p-5 justify-around max-w-screen-2xl m-auto">
        <div className="navbar flex items-center py-3 justify-around px-20 mblres:justify-between mblres:px-0 ">
          {/* Logo */}
          <div className=" cursor-pointer">
            <Image alt="Logo" src={logoImage} width={130} onClick={() => router.push('/')} />
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
          <div className="navlinks ml-24 w-[150%] hidden sm:flex gap-4 items-center">
            {/* first drop down */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[#81868E]">More than managed IT</NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-48">
                    <div>
                      <NavigationMenuLink><Button onClick={() => router.push('/what')} className={"w-[100%] font-medium hover:text-white hover:bg-[#0055FF] bg-bgSilver1" + (pathname === '/what' ? ' text-white bg-[#0055FF]' : '')}>What is ANC?</Button></NavigationMenuLink>
                    </div>
                    <div>
                      <NavigationMenuLink><Button onClick={() => router.push('/who')} className={"w-[100%] font-medium hover:text-white hover:bg-[#0055FF] bg-bgSilver1" + (pathname === '/who' ? ' text-white bg-[#0055FF]' : '')}>Who needs ANC?</Button></NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            {/* second dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-[#81868E]">ANC Plans</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div>
                      <NavigationMenuLink><Button onClick={() => router.push('/CMOplan')} className={"w-[100%] font-medium hover:text-white hover:bg-[#0055FF] bg-bgSilver1" + (pathname === '/CMOplan' ? ' text-white bg-[#0055FF]' : '')}>Marketing Plan</Button></NavigationMenuLink>
                    </div>
                    <div>
                      <NavigationMenuLink><Button onClick={() => router.push('/CFOplan')} className={"w-[100%] font-medium hover:text-white hover:bg-[#0055FF] bg-bgSilver1" + (pathname === '/CFOplan' ? ' text-white bg-[#0055FF]' : '')}>Ad Hoc services</Button></NavigationMenuLink>
                    </div>
                    <div>
                      <NavigationMenuLink><Button onClick={() => router.push('/CTOplan')} className={"w-[100%] font-medium hover:text-white hover:bg-[#0055FF] bg-bgSilver1" + (pathname === '/CTOplan' ? ' text-white bg-[#0055FF]' : '')}>Technology Plan</Button></NavigationMenuLink>
                    </div>
                    <div>
                      <NavigationMenuLink><Button onClick={() => router.push('/CEOplan')} className={"w-[100%] font-medium hover:text-white hover:bg-[#0055FF] bg-bgSilver1" + (pathname === '/CEOplan' ? ' text-white bg-[#0055FF]' : '')}>Full Solution Plan</Button></NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* rest of the links */}
                {/* <NavigationMenuItem className="px-4">
                  <NavigationMenuLink className="text-[#81868E]  text-sm hover:text-gray-700 cursor-pointer">
                    Case Studies & Blogs
                  </NavigationMenuLink>
                </NavigationMenuItem> */}
                <NavigationMenuItem className="px-4">
                  <NavigationMenuLink className="text-[#81868E] text-sm hover:text-gray-700 cursor-pointer">
                    <a href="/#FAQ" className=" scroll-smooth">FAQs</a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="px-4">
                  <NavigationMenuLink className="text-[#81868E] text-sm hover:text-gray-700 cursor-pointer">
                    <a href="#contact" className=" scroll-smooth">About Us</a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Get a Quote button */}
          <div className="ml-auto hidden sm:block">
            <Button className="bg-btColor text-white rounded px-8 py-6 hover:text-black hover:border" variant="outline">Let's talk</Button>
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
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <p className="text-[#81868E]">More than managed IT</p>

                        <div>
                          <p onClick={() => router.push('/what')} className={"w-[100%] ml-5 px-2 py-2 my-3 font-medium " + (pathname === '/what' ? ' text-white bg-[#0055FF]' : '')}>What is ANC?</p>
                        </div>
                        <div>
                          <p onClick={() => router.push('/who')} className={"w-[100%] ml-5 px-2 py-2 my-3 font-medium " + (pathname === '/who' ? ' text-white bg-[#0055FF]' : '')}>Who needs ANC?</p>
                        </div>

                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="text-[#81868E] hover:text-gray-700 cursor-pointer"
                >

                  <p className="text-[#81868E]">ANC Plans</p>

                  <div>
                    <p onClick={() => router.push('/CMOplan')} className={"w-[100%] ml-5 my-3 font-medium   px-2 py-2 " + (pathname === '/CMOplan' ? ' bg-[#0055FF] text-white' : '')}>Marketing Plan</p>
                  </div>
                  <div>
                    <p onClick={() => router.push('/CFOplan')} className={"w-[100%] font-medium ml-5 my-3    px-2 py-2" + (pathname === '/CFOplan' ? ' bg-[#0055FF] text-white' : '')}>Ad Hoc services</p>
                  </div>
                  <div>
                    <p onClick={() => router.push('/CTOplan')} className={"w-[100%] font-medium ml-5 my-3   px-2 py-2 " + (pathname === '/CTOplan' ? ' bg-[#0055FF] text-white' : '')}>Technology Plan</p>
                  </div>
                  <div>
                    <p onClick={() => router.push('/CEOplan')} className={"w-[100%] font-medium ml-5 my-3   px-2 py-2 " + (pathname === '/CEOplan' ? ' bg-[#0055FF] text-white' : '')}>Full Solution Plan</p>
                  </div>


                </motion.div>
                {/* <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="text-[#81868E] hover:text-gray-700 cursor-pointer"
                >
                  Case Studies & Blogs
                </motion.div> */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                  className="text-[#81868E] hover:text-gray-700 cursor-pointer"
                >
                  <a href="/#FAQ" className=" scroll-smooth">FAQs</a>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  className="text-[#81868E] hover:text-gray-700 cursor-pointer"
                >
                  <a href="#contact" className=" scroll-smooth">About Us</a>
                </motion.div>
              </div>
              <div className="flex justify-center py-2">
                <Button className="bg-btColor text-white rounded h-8 px-4">Let's Talk</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
