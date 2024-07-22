'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import SectionOne from '../components/CFOplan/SectionOne'
import CFOPlan from '../components/CFOplan/CFOplan'
import PlanCard from '../components/PlanCard'
import Images from '../components/Images'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

function page() {
    return (
        <>
            <Navbar />
            <SectionOne />
            <CFOPlan />
            <PlanCard/>
            {/* <Images/> */}
            <FAQ/>
            <Footer />
        </>
    )
}

export default page