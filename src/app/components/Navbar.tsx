
import React from 'react'
import Image from 'next/image'
import logoImage from '../../../public/logo.jpg'
import { Button } from "@/components/ui/button"

const Navbar = () => {
  return (
    <>
         <div className="navbar bg-bgcolor flex flex-col sm:flex-row items-center justify-around pt-6 px-4 sm:px-6">
      <div className="flex-shrink-0 mr-6">
        {/* Adding margin-right for spacing before the logo */}
        <Image alt='Logo' src={logoImage} width={75} />
      </div>
      <div className="navlinks flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-0">
        <div className="text-[#333333] hover:text-black cursor-pointer">Home</div>
        <div className="text-[#81868E] hover:text-gray-700 cursor-pointer">About</div>
        <div className="text-[#81868E] hover:text-gray-700 cursor-pointer">Pages</div>
        <div className="text-[#81868E] hover:text-gray-700 cursor-pointer">Blog</div>
        <div className="text-[#81868E] hover:text-gray-700 cursor-pointer">Contact</div>
      </div>
      <div className="mt-4 sm:mt-0 ml-6">
        <Button className="bg-btColor text-[#FFFFFF] rounded h-8 w-32" variant="outline">
          GET A QUOTE
        </Button>
      </div>
    </div>
    </>
  )
}

export default Navbar
