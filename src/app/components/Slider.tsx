import React from 'react';
import Image from 'next/image';
import SliderImage from '../../../public/sliderimage-2.png';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

const Slider = () => {
  const router = useRouter()
  return (
    <>
      <main className="flex flex-col-reverse lg:flex-row  items-center w-full mt-12 max-w-screen-2xl m-auto">
        <div className="LEFT pl-4 sm:pl-8 lg:pl-24 text-center lg:text-left">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Grow Your <br /> Business More <br /> Efficiently
          </div>
          <p className="text-[#5F6266] text-sm lg:text-base mt-4 lg:mt-6">
          ANC consultants help you drive automation and optimization through marketing, <br className="hidden lg:block" />  technology and business strategy management. 
          </p>
          <div className="Buttons flex flex-col lg:flex-row gap-3 mt-4 lg:mt-6 items-center lg:items-start justify-center lg:justify-start">
            <Button onClick={() => router.push('/#userForm')} className="bg-btColor text-[#FFFFFF] rounded-xl h-9 py-6 px-6" variant="outline">
              <span className='text-[12px]'>GET A QUOTE</span>
            </Button>
            <Button className="bg-bt2 text-[#FFFFFF] rounded-xl h-9 py-6 px-6" variant="outline">
              <span className='text-[12px]'>OUR SERVICES</span>
            </Button>
          </div>
        </div>
        <div className="RIGHT flex-1 relative mt-8 lg:mt-0 w-full lg:w-auto flex justify-center lg:justify-end ">
          <Image
            alt="Slider Image"
            // className="w-full lg:w-[44rem] h-auto lg:h-[28.4rem] rounded-tl-[100px] lg:rounded-tl-[280px] rounded-bl-[10px] -mt-12"
            className='rounded-tl-[370px] w-[45rem]'
            src={SliderImage}
          />
          <div
            style={{
              background: 'linear-gradient(to bottom, rgba(0, 85, 255, 0), rgba(0, 85, 255, 1))',
              padding: '20px',
              color: 'white',
              transform: 'skew(.5rad)',
            }}
            className="linear-color w-56 h-[100%] absolute bottom-0 right-56 lg:right-[26rem]"
          />
          <div
            style={{
              background: 'linear-gradient(to bottom, rgba(0, 85, 255, 0), rgba(0, 85, 255, 0.4))',
              padding: '20px',
              color: 'white',
              transform: 'skew(.5rad)',
            }}
            // className="linear-color w-20 sm:w-28 lg:w-36 h-[100%]  absolute bottom-0 right-16 lg:right-[10rem]"
            className="linear-color w-44 h-[80%]  absolute bottom-0 right-16 lg:right-[10rem]"
          />
        </div>
      </main>
    </>
  );
};

export default Slider;
