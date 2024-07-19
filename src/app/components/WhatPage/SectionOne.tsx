import React from 'react'
import Image from 'next/image'
import PlanCard from '../PlanCard'


export default function () {
  return (
    <>
      {/*Manage It section one*/}

      <div className='max-w-2xl p-10 m-auto flex flex-col items-center justify-center'>
        <div>
          <p className='uppercase text-sm font-semibold m-1'>What is ANC?</p>
          <Image alt='what is ANC' src={'/whoPage/Union (1).png'} width={100} height={100} />
        </div>
        <h1 className='text-center text-4xl font-semibold my-4'>IT Managed Services and so <br /> much more</h1>
        <p className='text-[#81868E] py-6 text-sm text-center'>Your worry-free, all-inclusive Managed IT Solution</p>
      </div>

      {/*Manage It section two*/}

      <div className='bg-[#00194C] max-w-screen-2xl m-auto flex h-[350px] mblres:flex-wrap'>
        <div className='p-24 flex justify-center my-auto'>
          <Image alt='what is ANC' src={'/whatPage/we-have-managed.png'} width={550} height={550} />
        </div>
        <div className="bg-[url('/whatPage/sectionOne-bg.png')] w-full bg-center bg-fit opacity-50 mblres:hidden" />
      </div>

      {/* Which plan is best for you */}
      <div id='planCard'>
        <PlanCard />
      </div>
      
      <div className='max-w-screen-2xl m-auto flex justify-center items-center my-4'>
        <Image alt='what is ANC' src={'/whatPage/Group 2049.png'} width={350} height={350} />
      </div>

    </>
  )
}