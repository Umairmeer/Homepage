import React from 'react'
import Image from 'next/image'


export default function () {

    return (
        <>
            <div className=' max-w-screen-2xl m-auto bg-[#F2F7FF] p-10'>
                <h1 className=' text-4xl font-semibold text-center'>Ad Hoc Custom Services</h1>
                <p className=' text-[#909090] text-center p-10 max-w-4xl m-auto'>Our custom services are tailored to your business requirements, ensuring that each project is executed with precision and aligned with your strategic objectives. With ANC, you get flexible, on-demand support for your most pressing needs, empowering your business to stay agile and competitive in a dynamic marketplace. Let us partner with you to create innovative solutions that drive your business forward.</p>

                {/* Table */}
                <div className='flex justify-center items-center'>
                    {/* <Image alt='what is ANC' src={'/productivityPage/Group 39536.png'} className='ml-4' width={1200} height={1200} /> */}
                    <div className='border-2 border-dotted rounded-xl border-blue-600 p-10 bg-white'>
                        <table>
                            <th className='text-2xl underline p-6 uppercase font-bold'>Adhoc Services </th>
                            <tr>
                                <tr className='text-center border-y hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer font-semibold'><td className='p-2'>Inventory Management</td></tr>
                                <tr className='text-center border-y hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer font-semibold'><td className='p-2'>Tailored Websites</td></tr>
                                <tr className='text-center border-y hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer font-semibold'><td className='p-2'>App Creation</td></tr>
                                <tr className='text-center border-y hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer font-semibold'><td className='p-2'>Website development</td></tr>
                                <tr className='text-center border-y hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer font-semibold'><td className='p-2'>Bot Creation </td></tr>
                                <tr className='text-center border-y hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer font-semibold'><td className='p-2'>Custom Automation </td></tr>
                                <tr className='text-center border-y hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer font-semibold'><td className='p-2'>Augmented reality development  </td></tr>
                                <tr className='text-center border-y hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer font-semibold'><td className='p-2'>IT Networking Guidance and deployment </td></tr>
                                <tr className='text-center border-y hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer font-semibold'><td className='p-2'>Non-Profit and EDU licensing for Microsoft </td></tr>
                                <tr className='text-center border-y hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer font-semibold'><td className='p-2'>Microsoft and Google SaaS licenses  </td></tr>
                                <tr className='text-center border-y hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer font-semibold'><td className='p-2'>Training on current solutions </td></tr>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
