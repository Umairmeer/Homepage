'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import SectionOne from '../components/CEOplan/SectionOne'
import CEOPlan from '../components/CEOplan/CEOplan'
import PlanCard from '../components/PlanCard'
import Images from '../components/Images'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

function page() {
    return (
        <>
            <Navbar />
            <SectionOne />
            <CEOPlan />
            <PlanCard/>
            {/* <Images/> */}
            <FAQ/>
            <Footer />
        </>
    )
}

export default page