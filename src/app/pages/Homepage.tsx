import React from 'react'
import Image from 'next/image'
import SliderImage from '../../../public/sliderimage.png'
import FAQ from '../components/FAQ'
import Form from '../components/Form'
import Footer from '../components/Footer'
import Reviews from '../components/Reviews'
import HeadingCards from '../components/HeadingCards'
import BussinesCards from '../components/BussinesCards'
import Images from '../components/Images'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'




const Homepage = () => {
    return (
        <>
        <Navbar/>
        <Slider/>
        <Images/>
        <BussinesCards/>
        <HeadingCards/>
         <Reviews/>            
         <FAQ/>
         <Form/>
         <Footer/>

        </>
    )
}

export default Homepage
