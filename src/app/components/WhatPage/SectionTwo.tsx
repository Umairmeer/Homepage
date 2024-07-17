import React from 'react'
import Image from 'next/image'

function SectionTwo() {
    return (
        <>
            <div className='max-w-screen-2xl flex-col items-center  p-10 m-auto flex justify-center '>
                {/* Video section */}
                <Image className='my-8 hover:brightness-50 cursor-pointer transition-all duration-500' alt='what is ANC' src={'/whatPage/Group 2077.png'} width={1300} height={1300} />

                {/* IT Partner section */}

                <div className='w-full flex flex-wrap '>
                    {/* left side */}

                    <div className='relative w-1/2'>
                        <Image className='my-4 rounded-xl' alt='what is ANC' src={'/whatPage/image-1.png'} width={600} height={600} />
                        <div className='bg-[#0055FF] p-16 leading-snug absolute top-72 left-80 text-4xl text-white rounded-xl max-w-80'>
                            Whatever Your Size, Goals or Challenges, We Meet You There
                        </div>
                    </div>

                    {/* right side */}

                    <div className='p-10 w-1/2'>
                        <div className='relative max-w-lg'>
                            <Image className='' alt='what is ANC' src={'/whatPage/Union.png'} width={46} height={46} />
                            <h1 className='text-4xl font-semibold ml-8'>An IT Partner for Today’s Workplace</h1>
                            <Image className='absolute top-16 right-10' alt='what is ANC' src={'/whatPage/Union (1).png'} width={160} height={160} />
                        </div>
                        <p className='text-[#81868E] py-12 text-xl ml-8'>Business is changing radically from traditional onsite to hybrid workplaces. Your office is growing more decentralized.
                            We can help secure your company from cyberattacks and enhance collaboration with cloud data storage. And if your road warriors experience technical setbacks, our unlimited IT service desk can assist them.</p>
                        <Image className='ml-8' alt='what is ANC' src={'/whatPage/Frame 2059.png'} width={600} height={600} />
                    </div>

                </div>
                {/* meters */}
                <div className=' my-20'>
                    <Image className='ml-8' alt='what is ANC' src={'/whatPage/Group 2060.png'} width={1200} height={1200} />
                </div>
            </div>
            <div className='w-full mb-20'>
                <Image className='m-auto' alt='what is ANC' src={'/whatPage/Frame 2078.png'} width={2000} height={2000} />
            </div>
        </>

    )
}

export default SectionTwo