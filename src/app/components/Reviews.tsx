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
    <section className='reviews pb-20'>
                <div className='row flex justify-around mt-10'>

                    <p className='text-[#333333] mt-3  ml-56'>Client Satisfaction <span className='text-[#81868E]'>is a focus at ANC</span></p>

                    <div className="Button flex justify-around h-11 border items-center rounded-xl p-4 border-[#0055FF] w-36">
                        View more
                        <div className='w-2'><Image src={ArrowImage} alt='' /></div>
                    </div>
                </div>

                <div className='reviews flex justify-around mt-20'>
                    <div className='card-1 '>
                        <div className='flex gap-4'><Image className='w-11 h-10  object-cover rounded-full' src={Avatar1} alt='' />
                            <div><h1 className='font-bold '>Breanna Parker</h1>
                                <div className='flex'>
                                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                                </div>
                            </div>
                        </div>

                        <p className='text-[#81868E] text-xs mt-6'>It is a long established fact that a reader will be <br /> distracted by the readable content of a page <br /> when looking at its layout. The point of using <br /> Lorem Ipsum is that it.</p>

                    </div>
                    <div className='card-2 '>
                        <div className='flex gap-4'><Image className='w-11 h-10  object-cover rounded-full' src={Avatar1} alt='' />
                            <div><h1 className='font-bold '>Breanna Parker</h1>
                                <div className='flex'>
                                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                                </div>
                            </div>
                        </div>

                        <p className='text-[#81868E] text-xs mt-6'>It is a long established fact that a reader will be <br /> distracted by the readable content of a page <br /> when looking at its layout. The point of using <br /> Lorem Ipsum is that it.</p>

                    </div> <div className='card-3'>
                        <div className='flex gap-4'><Image className='w-11 h-10  object-cover rounded-full' src={Avatar1} alt='' />
                            <div><h1 className='font-bold '>Breanna Parker</h1>
                                <div className='flex'>
                                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                                    <FontAwesomeIcon icon={faStar} className='w-4 text-[#0055FF]' />
                                </div>
                            </div>
                        </div>

                        <p className='text-[#81868E] text-xs mt-6'>It is a long established fact that a reader will be <br /> distracted by the readable content of a page <br /> when looking at its layout. The point of using <br /> Lorem Ipsum is that it.</p>
                    </div>
                </div>

            </section>
    </>
  )
}

export default Reviews
