import React from 'react'
import Image from 'next/image'

function SectionOne() {
    return (
        <>
            {/*Manage It section one*/}
            <div className='max-w-2xl p-10 m-auto flex flex-col items-center justify-center'>
                <div>
                    <p className='uppercase text-sm font-semibold m-1'>Who needs ANC?</p>
                    <Image alt='what is ANC' src={'/whoPage/Union (1).png'} width={120} height={100} />
                </div>
                <h1 className='text-center text-4xl font-semibold my-4'>Businesses that need IT that works for them — and a better way to get it.</h1>
                <p className='text-[#81868E] py-6 text-sm text-center'>Your worry-free, all-inclusive Managed IT Solution</p>
            </div>

            {/*Manage It section two*/}

            <div className='bg-[#00194C] max-w-screen-2xl m-auto flex h-[350px] mblres:flex-wrap '>
                <div className='py-24 pl-20  w-1/2 my-auto'>
                    <h1 className=' text-white text-4xl font-semibold pb-2'>Complete Managed IT Solutions</h1>
                    <Image alt='what is ANC' src={'/whoPage/Group 2047.png'} width={160} height={160} />
                </div>
                <div className="w-full text-white text-lg px-56 py-16" >
                    Managed IT service providers (MSPs) are essential to helping businesses operate. Yet most IT providers will handle only some aspects of your IT, leaving you to fill the gaps. And often their surprise costs can leave you hesitant to call for help. <br /><br /> At Cortavo, we're different. We provide complete managed IT solutions, and we're the only IT provider offering a variety of services under flat, all-inclusive service plans that consolidate your IT costs.
                </div>
            </div>

            <div className='relative '>

                {/* backgroundImages */}
                <Image alt='bg faded divs' src={'/whatPage/Rectangle 1313.png'} width={100} height={100} className=' absolute top-0 left-0' />
                <Image alt='bg faded divs' src={'/whatPage/Rectangle 1314.png'} width={200} height={200} className=' absolute top-0 left-0' />
                <Image alt='bg faded divs' src={'/whatPage/Rectangle 1302.png'} width={300} height={300} className=' absolute top-0 right-0' />
                <Image alt='bg faded divs' src={'/whatPage/Rectangle 1312.png'} width={200} height={200} className=' absolute top-80 right-0' />

                {/* boy's picture */}
                <div className='relative max-w-screen-2xl '>
                    <Image alt='bg faded divs' src={'/whoPage/Mask group.png'} width={260} height={260} className='absolute top-30 right-0 mblres:right-14 mblres:bottom-8 mblres:h-64 mblres:mt-28' />
                </div>

                {/* support section */}
                <div className='max-w-3xl m-auto mt-28 mblres:mt-72'>
                    <h1 className='text-center text-4xl font-semibold my-4'>We Support</h1>
                    <p className='text-[#81868E] py-6 text-lg text-center'>Managed IT service providers (MSPs) are essential to helping businesses operate. Yet most IT providers will handle only some aspects of your IT, leaving you to fill the gaps. And often their surprise costs can leave you hesitant to call for help.</p>
                </div>

                <div className='max-w-2xl rounded-xl m-auto bg-[#0055FF] text-white py-12 px-36 text-center text-lg mblres:p-4'>
                    At Cortavo, we're different. We provide complete managed IT solutions, and we're the only IT provider offering a variety of services under flat, all-inclusive service plans that consolidate your IT costs
                </div>

            </div>
            <div>
                {/* support section */}
                <div className=' max-w-screen-2xl m-auto mt-28 my-20'>
                    {/* <h1 className='text-center text-4xl font-semibold my-4'>We Solve</h1> */}
                    <Image alt='bg faded divs' src={'/whoPage/Frame 2072.png'} width={1300} height={1300} className='m-auto cursor-pointer' />
                </div>
            </div>
        </>
    )
}

export default SectionOne