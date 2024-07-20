import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const items = [
    {
        number: "1",
        title: "Robust & Responsive IT Support",
        content: "Unlimited Support – Our engineers keep you online with unlimited, US-based, Level-2 service desk support. Client-First Model – Our award-winning customer support puts your priorities at the forefront."
    },
    {
        number: "2",
        title: "Plans That Fit Your Unique Situation",
        content: "We offer a range of plans that are tailored to fit the specific needs of your business, ensuring you get the best support possible."
    },
    {
        number: "3",
        title: "Results Other Providers Can't Touch",
        content: "Our proven track record speaks for itself, delivering results that surpass industry standards."
    }
];

function SectionTwo() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleSetActiveIndex = (index:any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <div className='p-20 max-w-screen-2xl m-auto mblres:w-[100%]'>
                <div className='m-auto flex justify-center'>
                    <Image alt='what is ANC' src={'/whoPage/Mask group (1).png'} width={400} height={400} className='' />

                    <div className='bg-slate-300 flex items-center justify-center flex-col w-2/3 rounded-r-xl'>
                        <h1 className='text-4xl font-semibold pb-2 max-w-xl text-center mblres:text-xl'>Find The Plan That is Right For Your Business</h1>
                        <button className='bg-[#0055FF] text-white hover:text-black px-2 w-[120px] h-[48px] py-2 hover:bg-slate-300 hover:border-[#0055FF] border text-lg rounded-xl m-10 mblres:w-[120px] mblres:h-[48px]'>Get Help</button>
                    </div>
                </div>
            </div>

            <div className='relative m-auto max-w-screen-2xl p-10'>
                {/* backgroundImages */}
                <Image alt='bg faded divs' src={'/whatPage/Rectangle 1313.png'} width={100} height={100} className='absolute top-0 left-0' />

                {/* Why Business Choose Us */}
                <div className='relative py-1 max-w-lg m-auto'>
                    <h1 className='text-center text-4xl font-semibold my-4'>Why Businesses Choose Us</h1>
                    <Image alt='what is ANC' src={'/whoPage/Union (1).png'} width={160} height={100} className='absolute bottom-0 right-0' />
                </div>
            </div>
            <div className='flex mblres:flex-col mblres:justify-center mblres:items-center mb-20 max-w-screen-2xl m-auto justify-center'>

            <div className='flex mb-20 max-w-screen-2xl m-auto justify-center mblres:flex-col'>
                <Image alt='what is ANC' className='' src={'/whoPage/Group 2072.png'} width={620} height={620} />
                {/* <Image alt='what is ANC' className=' pl-20' src={'/whoPage/Frame 2084.png'} width={620} height={620} /> */}

                {/* Accordion */}
                <div className='pl-12 max-w-lg'>
                    <div className=' flex flex-col justify-center h-full' >
                        <Accordion type="single" collapsible>

                            {/* Accordion 1 */}

                            <AccordionItem className='my-4 rounded-xl bg-[#F6F6F6]' value="item-1">
                                <AccordionTrigger className='flex justify-start px-10 hover:no-underline'>
                                    <p className='px-3 py-1 rounded bg-blue-700 text-white font-semibold'>1</p>
                                    <h1 className='font-bold text-lg mx-1'>Robust & Responsive Support</h1>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className='px-10 text-[#909090]'>
                                        <p className='my-2'><span className='font-semibold'>Unlimited Support - </span>Our team dedicates support to all wings of your company and will provide unlimited support with your software, applications, and marketing.</p>
                                        <p className='my-2'><span className='font-semibold'>Client-First Model - </span>Our team puts you first, we are treat you like our employer and prioritize your need at the forefront.</p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            {/* Accordion 2 */}

                            <AccordionItem className='my-4 rounded-xl bg-[#F6F6F6]' value="item-2">
                                <AccordionTrigger className='flex justify-start px-10 hover:no-underline'>
                                    <p className='px-3 py-1 rounded bg-blue-700 text-white font-semibold'>2</p>
                                    <h1 className='font-bold text-lg mx-1'>Plan That Fits Your Unique Station</h1>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className='px-10 text-[#909090]'>
                                        <p className='my-2'><span className='font-semibold'>All-inclusive solutions – </span>Our solutions handle all your IT and business processes consolidate all your vendors into one.</p>
                                        <p className='my-2'><span className='font-semibold'>Simple budgeting - </span>Our flat fee + ad-hoc plans help cut surprise costs and shift your spend to operating expenses.</p>
                                        <p className='my-2'><span className='font-semibold'>Plans for you - </span>Our flexible plans adapt to your business reality and scale with the needs of your company.</p>
                                        <p className='my-2'><span className='font-semibold'>Client-first model – </span>Our team puts you first, we treat you like our employer and prioritize your need at the forefront. </p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>

                            {/* Accordion 3 */}

                            <AccordionItem className='my-4 rounded-xl bg-[#F6F6F6]' value="item-3">
                                <AccordionTrigger className='flex justify-start px-10 hover:no-underline'>
                                    <p className='px-3 py-1 rounded bg-blue-700 text-white font-semibold'>3</p>
                                    <h1 className='font-bold text-lg mx-1'>Results Other Providers Can't Touch</h1>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className='px-10 text-[#909090]'>
                                        <p className='my-2'><span className='font-semibold'>Swift Deployment – </span>Once we acquire a client we provide a detailed log to gather all information and timelines to help establish easy setup </p>
                                        <p className='my-2'><span className='font-semibold'>Detailed startup - </span>We make our presence known and work with your employees to help establish ourselves in 30 days. </p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                    </div>
                </div>
                <div className="container w-[50%] mx-auto p-4">
                    <main>
                        <div className="space-y-4">
                            {items.map((item, index) => (
                                <div key={index}>
                                    <button
                                        onClick={() => handleSetActiveIndex(index)}
                                        className="flex items-start w-full p-4 bg-[#F6F6F6] rounded-lg focus:outline-none"
                                    >
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-10 h-10 text-white bg-bt2 rounded-sm">
                                                {item.number}
                                            </div>
                                        </div>
                                        <div className="ml-4 text-left">
                                            <div className="text-gray-900 text-lg font-bold">{item.title}</div>
                                            {activeIndex === index && (
                                                <div className="mt-2 text-sm text-gray-700">{item.content}</div>
                                            )}
                                        </div>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
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
