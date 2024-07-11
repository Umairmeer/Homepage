import React from 'react'
import Image from 'next/image'
import BgImage from '../../../public/cardImg.png'
import { Button } from "@/components/ui/button"

const HeadingCards = () => {
  return (
    <>
      <main
        className='Heading-Cards h-full w-full mt-20 bg-cover justify-center'
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 25, 76, 1), rgba(0, 25, 76, 0.77)), url(${BgImage.src})`,
        }}
      >
        <p className='text-white pt-10 text-center'>What do you need to do?</p>
        <h1 className='text-3xl text-white text-center'>Let's guide you through the process</h1>
        
        {/* Use responsive grid for cards */}
        <div className='cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16 px-4 sm:px-8 md:px-16 lg:px-60'>
          <div className="card-1 p-3 bg-white h-56 w-full rounded-3xl text-center">
            <h1 className='text-[#98A5B7]'>STEP 1</h1>
            <p className='text-base font-bold mt-2 text-[#333333]'>Your Heading Goes Here</p>
            <p className='text-[#333333] mt-2 text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
          </div>
          <div className="card-2 p-3 bg-white h-56 w-full rounded-3xl text-center">
            <h1 className='text-[#98A5B7]'>STEP 2</h1>
            <p className='text-base font-bold mt-2 text-[#333333]'>Your Heading Goes Here</p>
            <p className='text-[#333333] mt-2 text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
          </div>
          <div className="card-3 p-3 bg-white h-56 w-full rounded-3xl text-center">
            <h1 className='text-[#98A5B7]'>STEP 3</h1>
            <p className='text-base font-bold mt-2 text-[#333333]'>Your Heading Goes Here</p>
            <p className='text-[#333333] mt-2 text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
          </div>
          <div className="card-4 p-3 bg-white h-56 w-full rounded-3xl text-center">
            <h1 className='text-[#98A5B7]'>STEP 4</h1>
            <p className='text-base font-bold mt-2 text-[#333333]'>Your Heading Goes Here</p>
            <p className='text-[#333333] mt-2 text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
          </div>
        </div>

        <div className='flex mt-8 justify-center pb-14'>
          <Button className='bg-bt2 text-[#FFFFFF] border-none rounded h-9 w-40' variant="outline">LET'S GET STARTED</Button>
        </div>
      </main>
    </>
  )
}

export default HeadingCards
