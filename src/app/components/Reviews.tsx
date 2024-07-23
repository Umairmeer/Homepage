import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Avatar1 from '../../../public/round1.png'
import Avatar2 from '../../../public/round2.png'
import Avatar3 from '../../../public/round3.png'
import ArrowImage from '../../../public/arrow.jpeg'

const Reviews = () => {
  return (
    <>
      <section className='reviews pb-20 px-4 sm:px-8 md:px-16'>
        <div className='flex flex-col sm:flex-row justify-around items-center mt-10'>
          <p className='text-[#333333] mt-3 text-center sm:text-left'>
            Client Satisfaction <span className='text-[#81868E]'>is a focus at ANC</span>
          </p>

          {/* <div className="Button flex items-center h-11 border rounded-xl p-4 border-[#0055FF] mt-4 sm:mt-0">
            View more
            <div className='w-2 ml-2'><Image src={ArrowImage} alt='Arrow' /></div>
          </div> */}
        </div>

        <div className='reviews mt-20'>
          {/* Use grid layout with responsive columns */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            <div className='card-1 p-4 bg-white rounded-3xl'>
              <div className='flex gap-4 items-center'>
                <Image className='w-11 h-10 object-cover rounded-full' src={Avatar1} alt='Avatar' />
                <div>
                  <h1 className='font-bold'>Breanna Parker</h1>
                  <div className='flex'>
                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                  </div>
                </div>
              </div>
              <p className='text-[#81868E] text-xs mt-4'>
                It is a long established fact that a reader will be distracted by the readable content of a page
                when looking at its layout. The point of using Lorem Ipsum is that it.
              </p>
            </div>
            <div className='card-2 p-4 bg-white rounded-3xl'>
              <div className='flex gap-4 items-center'>
                <Image className='w-11 h-10 object-cover rounded-full' src={Avatar2} alt='Avatar' />
                <div>
                  <h1 className='font-bold'>Breanna Parker</h1>
                  <div className='flex'>
                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                  </div>
                </div>
              </div>
              <p className='text-[#81868E] text-xs mt-4'>
                It is a long established fact that a reader will be distracted by the readable content of a page
                when looking at its layout. The point of using Lorem Ipsum is that it.
              </p>
            </div>
            <div className='card-3 p-4 bg-white rounded-3xl'>
              <div className='flex gap-4 items-center'>
                <Image className='w-11 h-10 object-cover rounded-full' src={Avatar3} alt='Avatar' />
                <div>
                  <h1 className='font-bold'>Breanna Parker</h1>
                  <div className='flex'>
                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                  </div>
                </div>
              </div>
              <p className='text-[#81868E] text-xs mt-4'>
                It is a long established fact that a reader will be distracted by the readable content of a page
                when looking at its layout. The point of using Lorem Ipsum is that it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Reviews
