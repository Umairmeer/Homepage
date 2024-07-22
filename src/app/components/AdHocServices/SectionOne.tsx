import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function SectionOne() {
    return (
        <>
            {/*Manage It section one*/}
            <div className='max-w-4xl p-10 m-auto flex flex-col items-center justify-center '>
                <div>
                    <p className='uppercase text-sm font-semibold m-1 ml-2'>Ad Hoc</p>
                    <Image alt='what is ANC' src={'/whoPage/Union (1).png'} className='' width={80} height={80} />
                </div>
                <h1 className='text-center text-4xl font-semibold my-4 max-w-xl'>Ad Hoc Custom Services</h1>
                <Button onClick={() => {
                    alert('Our Contact +404 980 9340')
                }} className=' bg-[#0055FF] text-white hover:text-black px-8 py-6 text-lg rounded-xl m-10'>Let’s Talk</Button>
            </div>
            {/* background image */}
            <div className='relative'>
                <Image alt='bg faded divs' src={'/whatPage/Rectangle 1313.png'} width={100} height={100} className=' absolute top-0 left-0' />
            </div>

            {/* Security and Support */}
            <div className=' max-w-screen-2xl m-auto  p-10 flex mblres:flex-col-reverse mblres:p-0 '>
                <div className='w-1/2 p-10 pl-20  flex flex-col  justify-center mblres:w-[100%]'>
                    <h1 className='text-4xl font-bold p-1 mblres:text-center'>Ad Hoc Custom Services
                    </h1>
                    <Image alt='what is ANC' src={'/whoPage/Union (1).png'} className='ml-6' width={160} height={160} />
                    <p className=' text-[#909090] text-lg max-w-md py-10'>At Agile Networking Consultants (ANC), we understand that every business has unique needs and challenges that require specialized solutions. That’s why we offer a range of ad hoc custom services designed to address specific projects and goals. Whether you need a complete website design or redesign to enhance your online presence, app development to engage your customers, infrastructure development to support your growing operations, or device imaging to ensure seamless deployment of new hardware, our team of experts is here to help.</p>
                </div>
                <div className='w-1/2 mblres: ml-14 mblres:w-[80%] mblres:items-center'>
                    <Image alt='what is ANC' src={'/productivityPage/Group 2086.png'} className='ml-4 mblres:h-36 mblres:w-64' width={800} height={800} />
                </div>
            </div>
        </>
    )
}

export default SectionOne