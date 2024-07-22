import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function SectionOne() {
    return (
        <>
            {/*Manage It section one*/}
            <div className='max-w-4xl p-10 m-auto flex flex-col items-center justify-center'>
                <div>
                    <p className='uppercase text-sm font-semibold m-1'>CMO Plan</p>
                    <Image alt='what is ANC' src={'/whoPage/Union (1).png'}  width={80} height={80} />
                </div>
                <h1 className='text-center text-4xl font-semibold my-4'>Comprehensive Marketing Solutions.</h1>
                <Button onClick={() => {
              alert('Our Contact +404 980 9340')
            }} className=' bg-[#0055FF] text-white hover:text-black px-8 py-6 text-lg rounded-xl m-10'>Let’s Talk</Button>
            </div>
            {/* background image */}
            <div className='relative'>
                <Image alt='bg faded divs' src={'/whatPage/Rectangle 1313.png'} width={100} height={100} className=' absolute top-0 left-0 mblres:top-28' />
            </div>

            {/* Security and Support */}
            <div className=' max-w-screen-2xl m-auto p-10 flex mblres:flex-col-reverse mblres:p-0'>
                <div className='w-full p-10 pl-20  flex flex-col  justify-center mblres:w-[100%] '>
                    <h1 className='text-4xl font-bold p-1 mblres:text-center'>Transforming Your Brand with Innovative Marketing Solutions</h1>
                    <Image alt='what is ANC' src={'/whoPage/Union (1).png'} className='ml-4 mblres:ml-14 mblres:mt-2' width={160} height={160} />
                    <p className=' text-[#909090] text-lg py-10 '>Our CMO services at Agile Networking Consultants are crafted to elevate your brand’s presence and performance across all digital channels. From dynamic social media marketing and strategic SEO to compelling marketing pitches and comprehensive sales plans, we cover every aspect of your marketing strategy. Our holistic approach ensures that your brand not only reaches but engages and converts your target audience effectively. Partner with us to develop innovative marketing strategies that drive brand growth, increase visibility, and enhance customer engagement, positioning your business for sustained success.</p>
                </div>
                {/* <div className='w-1/2 mblres: ml-14 mblres:w-[80%] mblres:items-center'>
                    <Image alt='what is ANC' src={'/productivityPage/Frame 2085.png'} className='ml-4 mblres:h-36 mblres:w-64' width={800} height={800} />

                </div> */}
            </div>
        </>
    )
}

export default SectionOne