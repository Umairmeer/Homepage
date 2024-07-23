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
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter()
  const path = usePathname()
  return (
    <div id='contact' className='bg-[#00194C] py-8 px-4 sm:px-8 md:px-12 lg:px-16 mt-32 lg:mt-0 '> {/* Add margin-top on mobile screens */}
      <div className={'flex flex-col  lg:mt-0 sm:mt-64  md:flex-row ' + (path === '/' ? 'pt-72 mt-36' : '')}>
        {/* Logo and Social Media */}
        <div className='mb-8 md:mb-0 mt-32 lg:mt-0 md:w-1/4 text-center md:text-left'>
          <div className='flex justify-center mt-16 md:justify-start mb-4'>
            <Image src={ANCWHITE} className='w-24' alt='Company Logo' />
          </div>

          <div className='flex justify-center mt-16 md:justify-start gap-3'>
            <div onClick={() => window.open('https://www.facebook.com/share/xrC12Qn6EiyLVJdH/?mibextid=LQQJ4d/', '_blank')} className='bg-bt2 hover:bg-transparent hover:border border cursor-pointer text-white p-2 rounded-full'>
              <TbBrandFacebook />
            </div>
            <div onClick={() => window.open('https://www.instagram.com/agile_networking?igsh=MWVrZWpndzlxa29wcA%3D%3D&utm_source=qr/', '_blank')} className='bg-bt2 hover:bg-transparent hover:border border cursor-pointer text-white p-2 rounded-full'>
              <SlSocialInstagram />
            </div>
            <div onClick={() => window.open('https://www.linkedin.com/company/agile-networking-llc/', '_blank')} className='bg-bt2 hover:bg-transparent hover:border border cursor-pointer text-white p-2 rounded-full'>
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className='mb-8 md:mb-0 md:w-1/4 mt-24 text-center md:text-left'>
          <div className='text-white mb-4 text-lg'>Company</div>
          <div className='text-white'>
            <div onClick={() => router.push('/')} className=' cursor-pointer mb-2 mt-8'>Home</div>
            <div onClick={() => router.push('/what#planCard')} className=' cursor-pointer mt-5'>Plan Card</div>
            <div onClick={() => router.push('/#contact')} className=' cursor-pointer mt-5'>About Us</div>
          </div>
        </div>

        {/* Contact Info */}
        <div className='mb-8 md:mb-0 mt-24 md:w-1/4 text-center md:text-left'>
          <div className='text-white mb-4 text-lg'>Contact Us</div>
          <div className='text-white'>
            <div className='mb-2 mt-8'>Info@agilenetworkingllc.com</div>
            <div className=' mt-5'>+404 980 9340 </div>
            <div className=' mt-5'>United States</div>
          </div>
        </div>

        {/* Subscribe */}
        <div className='md:w-1/4 text-center mt-28 md:text-left'>
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
          <Button className='bg-bt2 hover:text-white hover:border-[#0055FF] text-[#FFFFFF] border-transparent rounded h-9 w-full md:w-32' variant="outline">SUBSCRIBE</Button>
        </div>
      </div>

      <div className='flex justify-center mt-14 '>
        <div className='text-white text-center'>&copy; Copyright Agile Network Consultation 2024</div>
      </div>
    </div >
  );
};

export default Footer;
