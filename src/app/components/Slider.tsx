import React from 'react';
import Image from 'next/image';
import SliderImage from '../../../public/sliderimage.png';
import { Button } from "@/components/ui/button";

const Slider = () => {
  return (
    <>
      <main className="flex flex-col-reverse lg:flex-row  items-center w-full mt-28">
        <div className="LEFT pl-4 sm:pl-8 lg:pl-24 text-center lg:text-left">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Grow Your <br /> Business More <br /> Efficiently
          </div>
          <p className="text-[#5F6266] text-sm lg:text-base mt-4 lg:mt-6">
            Agilos helps you to convert your data into strategic assets and get <br className="hidden lg:block" /> top-notch business insights
          </p>
          <div className="Buttons flex flex-col lg:flex-row gap-3 mt-4 lg:mt-6 items-center lg:items-start justify-center lg:justify-start">
            <Button className="bg-btColor text-[#FFFFFF] rounded h-9 w-32" variant="outline">
              GET A QUOTE
            </Button>
            <Button className="bg-bt2 text-[#FFFFFF] rounded h-9 w-32" variant="outline">
              OUR SERVICES
            </Button>
          </div>
        </div>
        <div className="RIGHT flex-1 relative mt-8 lg:mt-0 w-full lg:w-auto flex justify-center lg:justify-end">
          <Image
            alt="Slider Image"
            className="w-full lg:w-[44rem] h-auto lg:h-[28.4rem] rounded-tl-[100px] lg:rounded-tl-[280px] rounded-bl-[10px] -mt-12"
            src={SliderImage}
          />
          <div
            style={{
              background: 'linear-gradient(to bottom, rgba(0, 85, 255, 0), rgba(0, 85, 255, 1))',
              padding: '20px',
              color: 'white',
              transform: 'skew(.5rad)',
            }}
            className="linear-color w-24 sm:w-32 lg:w-40 h-[100%] sm:h-[22rem]  lg:h-[16rem] absolute bottom-0 right-56 lg:right-[26rem]"
          />
          <div
            style={{
              background: 'linear-gradient(to bottom, rgba(0, 85, 255, 0), rgba(0, 85, 255, 0.4))',
              padding: '20px',
              color: 'white',
              transform: 'skew(.5rad)',
            }}
            className="linear-color w-20 sm:w-28 lg:w-36 h-[100%] sm:h-[18rem] lg:h-[20rem] absolute bottom-0 right-16 lg:right-[10rem]"
          />
        </div>
      </main>
    </>
  );
};

export default Slider;
