import React from 'react';
import Image from 'next/image';
import ANCWHITE from '../../../public/ancwhite.png';
import { MdOutlineEmail } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { TbBrandFacebook } from "react-icons/tb";
import { SlSocialInstagram } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='bg-[#00194C] py-1 px-4 md:px-8 lg:px-16'>
      <div className='flex flex-col md:flex-row'>
        {/* Logo and Social Media */}
        <div className='mb-8 md:mb-0 md:w-1/4 pt-96'>
          <div className='flex justify-center md:justify-start mb-4'>
            <Image src={ANCWHITE} className='w-24' alt='' />
          </div>

          <div className='flex justify-center mt-16 md:justify-start gap-3'>
            <div className='bg-bt2 text-white p-2 rounded-full'>
              <TbBrandFacebook />
            </div>
            <div className='bg-bt2 text-white p-2 rounded-full'>
              <SlSocialInstagram />
            </div>
            <div className='bg-bt2 text-white p-2 rounded-full'>
              <BsTwitterX />
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className='mb-8 md:mb-0 md:w-1/4 pt-96'>
          <div className='text-white mb-4 text-center md:text-left'>Company</div>
          <div className='text-white text-center md:text-left'>
            <div className='mb-2'>Home</div>
            <div className='mb-2'>Pages</div>
            <div className='mb-2'>About Us</div>
          </div>
        </div>

        {/* Contact Info */}
        <div className='mb-8 md:mb-0 md:w-1/4 pt-96'>
          <div className='text-white mb-4 text-center md:text-left'>Contact Us</div>
          <div className='text-white text-center md:text-left'>
            <div className='mb-2'>anc@gmail.com</div>
            <div className='mb-2'>+1808 08 08</div>
            <div className='mb-2'>123 12th St, ABC, USA</div>
          </div>
        </div>

        {/* Subscribe */}
        <div className='md:w-1/4 pt-96'>
          <div className='text-white mb-4 text-center md:text-left text-xs'>SUBSCRIBE TO OUR NEWSLETTER</div>
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

      <div className='flex justify-center mt-16'>
        <div className='text-white text-center'>&copy; Copyright Agile Network Consultation 2024</div>
      </div>
    </div>
  );
};

export default Footer;
