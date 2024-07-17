'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import SectionOne from '../components/WhoPage/SectionOne'
import SectionTwo from '../components/WhoPage/SectionTwo'
import Images from '../components/Images'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

function page() {
    return (
        <>
            <Navbar />
            <SectionOne />
            <SectionTwo />
            <h1 className=' max-w-screen-2xl m-auto my-10 text-center text-4xl font-semibold'>Satisfied Customers</h1>
            <Images />
            <Reviews />
            <Footer />
        </>
    )
}

export default page