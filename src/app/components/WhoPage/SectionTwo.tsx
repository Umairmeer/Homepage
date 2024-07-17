import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function SectionTwo() {
    return (
        <>
            <div className='p-20 max-w-screen-2xl m-auto'>
                <div className='m-auto flex justify-center'>
                    <Image alt='what is ANC' src={'/whoPage/Mask group (1).png'} width={400} height={400} />

                    <div className='bg-slate-300 flex items-center justify-center flex-col w-2/3 rounded-r-xl'>
                        <h1 className='  text-4xl font-semibold pb-2 max-w-xl text-center'>Find The Plan That is Right For Your Business</h1>
                        <Button className=' bg-[#0055FF] text-white hover:text-black px-8 py-6 text-lg rounded-xl m-10'>Get Help</Button>
                    </div>
                </div>
            </div>

            <div className='relative m-auto max-w-screen-2xl p-10'>

                {/* backgroundImages */}
                <Image alt='bg faded divs' src={'/whatPage/Rectangle 1313.png'} width={100} height={100} className=' absolute top-0 left-0' />


                {/* Why Business Choose Us */}
                <div className='relative py-1 max-w-lg m-auto'>
                    <h1 className='text-center text-4xl font-semibold my-4'>Why Businesses Choose Us</h1>
                    <Image alt='what is ANC' src={'/whoPage/Union (1).png'} width={160} height={100} className=' absolute bottom-0 right-0' />
                </div>
            </div>
            <div className='flex mb-20 max-w-screen-2xl m-auto justify-center'>
                <Image alt='what is ANC' className='' src={'/whoPage/Group 2072.png'} width={620} height={620} />
                <Image alt='what is ANC' className=' pl-20' src={'/whoPage/Frame 2084.png'} width={620} height={620} />
            </div>

            {/* ANC Difference */}
            <div className='max-w-screen-2xl m-auto'>
                <h1 className='text-center text-4xl font-semibold my-4'>The ANC Difference</h1>
                <div className='flex justify-center items-center my-6'>
                    <Image alt='what is ANC' className='' src={'/whoPage/Frame 2077.png'} width={900} height={900} />
                </div>
            </div>
        </>
    )
}

export default SectionTwo