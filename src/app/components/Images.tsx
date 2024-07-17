import React from 'react';
import Image from 'next/image';
import logo1 from '../../../public/Anz.png';
import logo2 from '../../../public/est.png';
import logo3 from '../../../public/nab.png';
import logo4 from '../../../public/st.png';
import logo5 from '../../../public/mac.png';
import logo6 from '../../../public/amp.png';
import logo7 from '../../../public/ing.png';
import logo8 from '../../../public/suncorp.png';
import logo9 from '../../../public/boq.png';
import logo10 from '../../../public/citi.png';
import logo11 from '../../../public/logo.jpg';
import logo12 from '../../../public/lib.png';
import logo13 from '../../../public/west.png';
import logo14 from '../../../public/SA.jpeg';
import logo15 from '../../../public/mystate.png';
import logo16 from '../../../public/adelaide.png';
import logo17 from '../../../public/me.png';
import logo18 from '../../../public/ubank.jpeg';
import logo19 from '../../../public/pepper.png';
import logo20 from '../../../public/latro.jpg';
import lineImage from '../../../public/aa.jpg';
import { usePathname } from 'next/navigation';

const Images = () => {
  const path = usePathname()
  return (
    <>
      {path === '/' ? (
        <div className="flex justify-center mt-9">
          <Image alt='' src={lineImage} />
        </div>
      ) : null}
      <div className="flex flex-wrap justify-evenly gap-4 mt-4">
        <div className="w-16 sm:w-20 opacity-20"><Image alt='' src={logo1} className=' grayscale' /></div>
        <div className="w-16 sm:w-20 opacity-20"><Image alt='' src={logo2} className=' grayscale' /></div>
        <div className="w-16 sm:w-20 opacity-20"><Image alt='' src={logo3} className=' grayscale' /></div>
        <div className="w-16 sm:w-20 opacity-20"><Image alt='' src={logo4} className=' grayscale' /></div>
        <div className="w-16 sm:w-20 opacity-20 mt-5"><Image alt='' src={logo5} className=' grayscale' /></div>
        <div className="w-16 sm:w-20 opacity-20"><Image alt='' src={logo6} className=' grayscale' /></div>
        <div className="w-16 sm:w-20 opacity-20"><Image alt='' src={logo7} className=' grayscale' /></div>
        <div className="w-16 sm:w-20 opacity-20"><Image alt='' src={logo8} className=' grayscale' /></div>
        <div className="w-16 sm:w-20 opacity-20"><Image alt='' src={logo9} className=' grayscale' /></div>
        <div className="w-16 sm:w-20 opacity-20"><Image alt='' src={logo10} className=' grayscale' /></div>
      </div>

      <div className="flex flex-wrap justify-evenly gap-4 mt-8">
        <div className="w-12 sm:w-16 mt-3 opacity-10"><Image alt='' src={logo11} className=' grayscale' /></div>
        <div className="w-12 sm:w-16 opacity-35"><Image alt='' src={logo12} className=' grayscale' /></div>
        <div className="w-16 sm:w-20 mt-4 opacity-25"><Image alt='' src={logo13} className=' grayscale' /></div>
        <div className="w-12 sm:w-16 mt-3"><Image alt='' src={logo14} className=' grayscale' /></div>
        <div className="w-16 sm:w-20 mt-3 opacity-40"><Image alt='' src={logo15} className=' grayscale' /></div>
        <div className="w-16 sm:w-20 opacity-45"><Image alt='' src={logo16} className=' grayscale' /></div>
        <div className="w-12 sm:w-16 mb-8 opacity-20"><Image alt='' src={logo17} className=' grayscale' /></div>
        <div className="w-16 sm:w-20 mt-3"><Image alt='' src={logo18} className=' grayscale' /></div>
        <div className="w-16 sm:w-20 mt-2 opacity-50"><Image alt='' src={logo19} className=' grayscale' /></div>
        <div className="w-12 sm:w-16 mt-3 opacity-50"><Image alt='' src={logo20} className=' grayscale' /></div>
      </div>
    </>
  );
}

export default Images;
