import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function SectionOne() {
    return (
        <>
            {/*Manage It section one*/}
            <div className='max-w-4xl p-10 m-auto flex flex-col items-center justify-center'>
                <div>
                    <p className='uppercase text-sm font-semibold m-1'>CFO Plan</p>
                    <Image alt='what is ANC' src={'/whoPage/Union (1).png'} width={80} height={80} />
                </div>
                <h1 className='text-center text-4xl font-semibold my-4'>Strategic Financial Management.</h1>
                <Button className=' bg-[#0055FF] text-white hover:text-black px-8 py-6 text-lg rounded-xl m-10'>Let’s Talk</Button>
            </div>
            {/* background image */}
            <div className='relative'>
                <Image alt='bg faded divs' src={'/whatPage/Rectangle 1313.png'} width={100} height={100} className=' absolute top-0 left-0' />
            </div>

            {/* Security and Support */}
            <div className=' max-w-screen-2xl m-auto  p-10 flex '>
                <div className='w-1/2 p-10 pl-20  flex flex-col  justify-center'>
                    <h1 className='text-4xl font-bold p-1'>Connect Your Team</h1>
                    <Image alt='what is ANC' src={'/whoPage/Union (1).png'} className='ml-4' width={160} height={160} />
                    <p className=' text-[#909090] text-lg max-w-md py-10'>Keep your existing computers and get your office connected with new networking equipment and high-speed internet, plus cloud data storage. Perfect for businesses that need to connect 10 or more employees.</p>
                </div>
                <div className='w-1/2 '>
                    <Image alt='what is ANC' src={'/productivityPage/Frame 2085.png'} className='ml-4' width={800} height={800} />
                </div>
            </div>
        </>
    )
}

export default SectionOne