'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import SectionOne from '../components/CTOplan/SectionOne'
import CTOPlan from '../components/CTOplan/CTOplan'
import PlanCard from '../components/PlanCard'
import Images from '../components/Images'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

function page() {
    return (
        <>
            <Navbar />
            <SectionOne />
            <CTOPlan />
            <PlanCard/>
            {/* <Images/> */}
            <FAQ/>
            <Footer />
        </>
    )
}

export default page