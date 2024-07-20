import React from 'react';
import Image from 'next/image';
import SocialMedia from '../../../public/app.png';
import TailoredWebsites from '../../../public/tweb.png';
import Inventory from '../../../public/inventry.png';
import Email from '../../../public/email.png';
import BusinessPlans from '../../../public/businessPlans.jpg';
import ServiceImage from '../../../public/service.jpg';
import CustomSolutions from '../../../public/customSol.webp';
import ITBusinessManagment from '../../../public/IT-BusinessManagement.png';
import Automate from '../../../public/automation.webp';
import Bot from '../../../public/bot.jpeg';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


const BussinesCards = () => {
  const picsArr = [
    {
      url: SocialMedia.src,
      heading: `Social Media Integration`
    },
    {
      url: TailoredWebsites.src,
      heading: 'Tailored Websites'
    },
    {
      url: Inventory.src,
      heading: 'Inventory Management'
    },
    {
      url: Email.src,
      heading: 'Professional Email Solutions'
    },
    {
      url: BusinessPlans.src,
      heading: `Stretegic Business Plans`
    },
    {
      url: CustomSolutions.src,
      heading: 'Customized Solutions'
    },
    {
      url: ITBusinessManagment.src,
      heading: 'IT/Business Management'
    },
    {
      url: Bot.src,
      heading: 'Bot Creation'
    },
    {
      url: Automate.src,
      heading: 'Customer Automated Solutions'
    }
  ]
  return (
    <>
      <div className="flex justify-center">
        <Image alt='' src={ServiceImage} />
      </div>

      <div className="mt-4">
        <div className="text-center">
          <h1 className="text-2xl sm:text-4xl font-medium">Changing The Way You Do Business With </h1>
          <h2 className="text-xl sm:text-4xl font-medium mt-2">Custom Technology Solutions</h2>
        </div>
        {/* <div className="text-xs text-[#81868E] text-center mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, facilis.
        </div> */}
      </div>

      <div className=' max-w-screen-2xl m-auto flex justify-center'>
        <Carousel
          opts={{
            align: "center",
            loop: true
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full max-w-6xl"
        >
          <CarouselContent>
            {picsArr.map((elem, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 ">
                <div
                  className=" h-96 w-full text-white text-center text-xl py-4 my-10 rounded-xl px-12"
                  style={{
                    backgroundImage: `url(${elem.url})`,
                    backgroundSize: 'cover',
                  }}
                >
                  <h1 className="mt-4">{elem.heading}</h1>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* <div className="hidden md:flex mt-10 gap-5 justify-center px-56">
        <div
          className="card-1 h-64 w-1/4 rounded text-white text-center text-lg"
          style={{
            backgroundImage: `url(${Card1.src})`,
            backgroundSize: 'cover',
          }}
        >
          <h1 className="mt-4">Mobile App</h1>
          <h2>Development</h2>
        </div>
        <div
          className="card-2 h-64 w-1/4 rounded text-white text-center text-lg"
          style={{
            backgroundImage: `url(${Card2.src})`,
            backgroundSize: 'cover',
          }}
        >
          <h1 className="mt-4">Tailored Websites</h1>
        </div>
        <div
          className="card-3 h-64 w-1/4 rounded text-white text-center text-lg"
          style={{
            backgroundImage: `url(${Card3.src})`,
            backgroundSize: 'cover',
          }}
        >
          <h1 className="mt-4">Inventory</h1>
          <h2>Management</h2>
        </div>
        <div
          className="card-4 h-64 w-1/4 rounded text-white text-center text-lg"
          style={{
            backgroundImage: `url(${Card4.src})`,
            backgroundSize: 'cover',
          }}
        >
          <h1 className="mt-4">Professional Email</h1>
          <h2>Solutions</h2>
        </div>
      </div> */}

      {/* <div className="flex flex-wrap mt-10 gap-5 justify-center px-4 sm:px-8 md:hidden">
        <div
          className="card-1 h-48 w-full sm:h-64 sm:w-56 rounded text-white text-center text-lg"
          style={{
            backgroundImage: `url(${Card1.src})`,
            backgroundSize: 'cover',
          }}
        >
          <h1 className="mt-4">Mobile App</h1>
          <h2>Development</h2>
        </div>
        <div
          className="card-2 h-48 w-full sm:h-64 sm:w-56 rounded text-white text-center text-lg"
          style={{
            backgroundImage: `url(${Card2.src})`,
            backgroundSize: 'cover',
          }}
        >
          <h1 className="mt-4">Tailored Websites</h1>
        </div>
        <div
          className="card-3 h-48 w-full sm:h-64 sm:w-56 rounded text-white text-center text-lg"
          style={{
            backgroundImage: `url(${Card3.src})`,
            backgroundSize: 'cover',
          }}
        >
          <h1 className="mt-4">Inventory</h1>
          <h2>Management</h2>
        </div>
        <div
          className="card-4 h-48 w-full sm:h-64 sm:w-56 rounded text-white text-center text-lg"
          style={{
            backgroundImage: `url(${Card4.src})`,
            backgroundSize: 'cover',
          }}
        >
          <h1 className="mt-4">Professional Email</h1>
          <h2>Solutions</h2>
        </div>
      </div> */}
    </>
  );
};

export default BussinesCards;
