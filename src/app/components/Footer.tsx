// components/Footer.js
import React from 'react';
import Image from 'next/image';
import ANCWHITE from '../../../public/ancwhite.png';
import { MdOutlineEmail } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { TbBrandFacebook } from "react-icons/tb";
import { SlSocialInstagram } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { usePathname } from 'next/navigation';

const Footer = () => {
  const path = usePathname()
  return (
    <div className='bg-[#00194C] py-8 px-4 sm:px-8 md:px-12 lg:px-16 mt-32 lg:mt-0'> {/* Add margin-top on mobile screens */}
      <div className={'flex flex-col  lg:mt-0 sm:mt-64  md:flex-row ' + (path === '/' ? 'pt-72 mt-36' : '')}>
        {/* Logo and Social Media */}
        <div className='mb-8 md:mb-0 mt-32 lg:mt-0 md:w-1/4 text-center md:text-left'>
          <div className='flex justify-center md:justify-start mb-4'>
            <Image src={ANCWHITE} className='w-24' alt='Company Logo' />
          </div>

          <div className='flex justify-center md:justify-start gap-3'>
            <div className='bg-bt2 cursor-pointer text-white p-2 rounded-full'>
              <TbBrandFacebook />
            </div>
            <div className='bg-bt2 cursor-pointer text-white p-2 rounded-full'>
              <SlSocialInstagram />
            </div>
            <div className='bg-bt2 cursor-pointer text-white p-2 rounded-full'>
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className='mb-8 md:mb-0 md:w-1/4 text-center md:text-left'>
          <div className='text-white mb-4 text-lg'>Company</div>
          <div className='text-white'>
            <div className='mb-2'>Home</div>
            <div className='mb-2'>Pages</div>
            <div className='mb-2'>About Us</div>
          </div>
        </div>

        {/* Contact Info */}
        <div className='mb-8 md:mb-0 md:w-1/4 text-center md:text-left'>
          <div className='text-white mb-4 text-lg'>Contact Us</div>
          <div className='text-white'>
            <div className='mb-2'>Info@agilenetworkingllc.com  </div>
            <div className='mb-2'>+404 980 9340 </div>
            <div className='mb-2'>North America ,United States</div>
          </div>
        </div>

        {/* Subscribe */}
        <div className='md:w-1/4 text-center md:text-left'>
          <div className='text-white mb-4 text-xs md:text-sm'>SUBSCRIBE TO OUR NEWSLETTER</div>
          <div className="relative mb-4">
            <div className="absolute mt-3 flex items-center pl-3 pointer-events-none">
              <MdOutlineEmail className='opacity-15' />
            </div>
            <input
              type="text"
              placeholder="Your Email"
              className="pl-10 p-2 w-full border border-gray-300 rounded-xl"
            />
          </div>
          <Button className='bg-bt2 text-[#FFFFFF] border-none rounded h-9 w-full md:w-32' variant="outline">SUBSCRIBE</Button>
        </div>
      </div>

      <div className='flex justify-center mt-8'>
        <div className='text-white text-center'>&copy; Copyright Agile Network Consultation 2024</div>
      </div>
    </div>
  );
};

export default Footer;
