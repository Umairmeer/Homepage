import React from 'react'
import Image from 'next/image'
import SliderImage from '../../../public/sliderimage.png'
import { Button } from "@/components/ui/button"



const Slider = () => {
  return (
    <>
      <main className="flex flex-col lg:flex-row items-center lg:items-start w-full px-4 lg:px-0 mt-28">
      <div className="LEFT flex-1 lg:mt-0 mt-8 lg:pl-24">
        <div className="text-4xl lg:text-5xl font-bold">
          Grow Your <br /> Business More <br /> Efficiently
        </div>
        <p className="text-[#5F6266] text-sm lg:text-base mt-4 lg:mt-6">
          Agilos helps you to convert your data into strategic assets and get <br /> top-notch business insights
        </p>
        <div className="Buttons flex flex-col lg:flex-row gap-3 mt-4 lg:mt-6">
          <Button className="bg-btColor text-[#FFFFFF] rounded h-9 w-32" variant="outline">
            GET A QUOTE
          </Button>
          <Button className="bg-bt2 text-[#FFFFFF] rounded h-9 w-32" variant="outline">
            OUR SERVICES
          </Button>
        </div>
      </div>
      <div className="RIGHT flex-1 relative mt-8 lg:mt-0">
        <Image
          alt="Slider Image"
          className="w-full h-auto lg:w-[44rem] lg:h-[28.4rem] rounded-tl-[280px] rounded-bl-[10px] -mt-12 lg:-mt-16"
          src={SliderImage}
        />
        <div
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 85, 255, 0), rgba(0, 85, 255, 1))',
            padding: '20px',
            color: 'white',
            transform: 'skew(.5rad)',
          }}
          className="linear-color w-40 h-[26rem] absolute bottom-8 right-0 lg:bottom-1 lg:right-[26rem]"
        />
        <div
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 85, 255, 0), rgba(0, 85, 255, 0.4))',
            padding: '20px',
            color: 'white',
            transform: 'skew(.5rad)',
          }}
          className="linear-color w-36 h-[20rem] absolute bottom-8 right-0 lg:bottom-1 lg:right-[10rem]"
        />
      </div>
    </main>
    </>
  )
}

export default Slider
