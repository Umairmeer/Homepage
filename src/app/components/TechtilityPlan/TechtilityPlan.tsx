import React from 'react'
import Image from 'next/image'


export default function () {

    return (
        <>
            <div className=' max-w-screen-2xl m-auto bg-[#F2F7FF] p-10'>
                <h1 className=' text-4xl font-semibold text-center'>Techtility Plan & Computer Packages</h1>
                <p className=' text-[#909090] text-center p-10 max-w-4xl m-auto'>Choose Producer, Innovator or Creator for Windows plans or Visionary for our Mac plan. Get the computers with the power and performance your team needs — all rolled into a single monthly fee.</p>

                {/* Table */}
                <div className='flex justify-center items-center'>
                    <Image alt='what is ANC' src={'/productivityPage/Group 39536.png'} className='ml-4' width={1200} height={1200} />
                </div>
            </div>
        </>
    )
}
