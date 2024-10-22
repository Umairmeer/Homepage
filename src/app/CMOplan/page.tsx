'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import SectionOne from '../components/CMOplan/SectionOne'
import CMOPlan from '../components/CMOplan/CMOplan'
import PlanCard from '../components/PlanCard'
import Images from '../components/Images'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

function page() {
    return (
        <>
            <Navbar />
            <SectionOne />
            <CMOPlan />
            <PlanCard />
            {/* <Images/> */}
            <FAQ />
            <Footer />
        </>
    )
}

export default page