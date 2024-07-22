"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function SectionOne() {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    return (
        <>

            {/*Manage It section one*/}
            <div className='max-w-2xl p-10 m-auto flex flex-col items-center justify-center '>
                <div>
                    <p className='uppercase text-sm font-semibold m-1'>Who needs ANC?</p>
                    <Image alt='what is ANC' src={'/whoPage/Union (1).png'} width={120} height={100} />
                </div>
                <h1 className='text-center text-4xl font-semibold my-4 mblres:text-2xl'>

                    We're Your Managed Solution Provider, extending your team's capabilities to manage every aspect of your business effectively.</h1>
                <p className='text-[#81868E] py-6 text-sm text-center'>Your worry-free, all-inclusive Managed Solution.</p>
            </div>

            {/*Manage It section two*/}
            <div className='bg-[#00194C] max-w-screen-2xl m-auto flex h-[400px] mblres:flex-wrap '>
                <div className='py-24 pl-20  w-1/2 my-auto'>
                    <h1 className=' text-white text-4xl font-semibold pb-2'>Complete Managed IT Solutions</h1>
                    <Image alt='what is ANC' src={'/whoPage/Group 2047.png'} width={160} height={160} />
                </div>
                <div className="w-full text-white text-lg px-56 py-16" >
                    Managed service providers (MSPs) are essential to helping business operate. Yet most MSP’s only handle one aspect of the company’s needs leaving you to fill in gaps or spend money on unknown factors. Often their surprise costs and lack of communication leave them to scatter for help.  <br /><br /> At ANC, we’re different. We provide a complete managed service solutions across all sectors of a company, we’re the only MSP helping businesses not only with company needs but helping them strategize and grow with the plans they purchase.
                </div>
            </div>

            <div className='relative '>
                {/* backgroundImages */}
                <Image alt='bg faded divs' src={'/whatPage/Rectangle 1313.png'} width={100} height={100} className=' absolute top-0 left-0' />
                <Image alt='bg faded divs' src={'/whatPage/Rectangle 1314.png'} width={200} height={200} className=' absolute top-0 left-0' />
                <Image alt='bg faded divs' src={'/whatPage/Rectangle 1302.png'} width={300} height={300} className=' absolute top-0 right-0' />
                <Image alt='bg faded divs' src={'/whatPage/Rectangle 1312.png'} width={200} height={200} className=' absolute top-80 right-0' />

                {/* boy's picture */}
                <div className='relative max-w-screen-2xl mblres:hidden '>
                    <Image alt='bg faded divs' src={'/whoPage/Mask group.png'} width={260} height={260} className='absolute top-60 right-0 mblres:right-14 mblres:bottom-8 mblres:h-64 mblres:mt-28' />
                </div>

                {/* support section */}
                <div className='max-w-3xl m-auto mt-28 mblres:mt-24'>
                    <h1 className='text-center text-4xl font-semibold my-4'>We Support</h1>
                    <p className='text-[#81868E] py-6 text-lg text-center'>In today's fast-paced business environment, having reliable and comprehensive support across all facets of your business is crucial. Many managed service providers (MSPs) only handle specific aspects, leaving gaps that you must fill, and unexpected costs can make you hesitant to seek help.</p>
                    <p className='text-[#81868E] py-6 text-lg text-center'>In addition to our tailored service packages, we also complete custom ad hoc assignments to address specific challenges and projects as they arise. Whether you need strategic technology enhancements, comprehensive marketing strategies, or expert financial management, ANC is your partner dedicated to delivering seamless, end-to-end support. We empower your business to focus on growth and innovation with confidence.</p>
                </div>

                <div className='max-w-2xl rounded-xl m-auto bg-[#0055FF] text-white py-12 px-36 text-center text-lg mblres:p-4 mblres:w-[100%]'>
                At Agile Networking Consultants (ANC), we're different. We provide complete, integrated solutions that cover every aspect of your business needs, from IT to marketing to financial management. Our all-inclusive service plans offer a flat-rate structure, eliminating surprise costs and providing you with predictable, consolidated expenses.
                </div>
            </div>

            <div>
                {/* support section */}
                <div className=' max-w-screen-2xl m-auto mt-28 my-20 '>
                    <h1 className='text-center text-4xl font-semibold my-4 '>We Solve</h1>

                    {/* Hover on these Images */}
                    <div className='flex justify-around mblres:flex-col '>
                        {['/whoPage/Frame 2069.png', '/whoPage/Frame 2069.png', '/whoPage/Frame 2068.png'].map((src, index) => (
                            <div
                                key={index}
                                onMouseEnter={() => setHoverIndex(index)}
                                onMouseLeave={() => setHoverIndex(null)}
                                className='relative mblres:mt-8 mblres:flex mblres:justify-center'
                            >
                                <Image src={src} width={350} height={350} alt='' />
                                {hoverIndex === index && (
                                    <motion.div
                                        className='absolute top-0 left-0 w-full h-full mblres:flex mblres:justify-center'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Image src={hoverIndex === 0 ? '/whoPage/Frame 2073.png' : hoverIndex === 1 ? '/whoPage/Frame 2071.png' : '/whoPage/Frame 2074.png'} width={350} height={350} alt='' />
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default SectionOne;
