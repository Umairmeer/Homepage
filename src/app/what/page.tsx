'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import SectionOne from '../components/WhatPage/SectionOne'
import Images from '../components/Images'
import SectionTwo from '../components/WhatPage/SectionTwo'
import Footer from '../components/Footer'

export default function () {
  return (
    <>
      <Navbar />
      <SectionOne />
      <Images />
      <SectionTwo />
      <Footer />
    </>
  )
}