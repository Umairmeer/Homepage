import React from 'react'
import Image from 'next/image'
import Card1 from '../../../public/app.png'
import Card2 from '../../../public/tweb.png'
import Card3 from '../../../public/inventry.png'
import Card4 from '../../../public/email.png'
import ServiceImage from '../../../public/service.jpg'


const BussinesCards = () => {
  return (
    <>
      <div className='flex justify-center'><Image alt='' src={ServiceImage} />
            </div>

            <div className="mt-4">
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium">Changing The Way To Do Best</h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mt-2">Business Solutions</h2>
      </div>
      <div className="text-xs sm:text-sm md:text-base text-[#81868E] text-center mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facilis.
      </div>
    </div>
      <div className='cards mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 justify-center px-4 md:px-16 lg:px-56'>
        <div className='card-1 h-64 w-full rounded text-white text-center text-lg' style={{
            backgroundImage: `url(${Card1.src})`,
            backgroundSize: 'cover',
        }}>
            <h1 className='mt-4'>Mobile App</h1>
            <h2>Development</h2>
        </div>
        <div className='card-2 h-64 w-full rounded text-white text-center text-lg' style={{
            backgroundImage: `url(${Card2.src})`,
            backgroundSize: 'cover',
        }}>
            <h1 className='mt-4'>Tailored Websites</h1>
        </div>
        <div className='card-3 h-64 w-full rounded text-white text-center text-lg' style={{
            backgroundImage: `url(${Card3.src})`,
            backgroundSize: 'cover',
        }}>
            <h1 className='mt-4'>Inventory</h1>
            <h2>Management</h2>
        </div>
        <div className='card-4 h-64 w-full rounded text-white text-center text-lg' style={{
            backgroundImage: `url(${Card4.src})`,
            backgroundSize: 'cover',
        }}>
            <h1 className='mt-4'>Professional Email</h1>
            <h2>Solutions</h2>
        </div>
      </div>
    </>
  )
}

export default BussinesCards
