"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import ArrowImage from '../../../public/arrow.jpeg'; // Assuming this is your arrow image

const FAQ = () => {
    // State to keep track of the expanded section
    const [expandedSection, setExpandedSection] = useState(null);

    // Function to toggle sections
    const toggleSection = (section: any) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <main className='Accordion relative pb-64 flex justify-center bg-[#F2F7FF] px-4 sm:px-6 md:px-8 lg:px-12'>
            <div className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl">
                <h1 className="text-3xl text-center pt-7 mb-8">FAQ's</h1>

                {/* Section 1 */}
                <div className="mb-2 w-full sm:w-[30rem] md:w-[36rem] lg:w-[38rem]">
                    <a
                        href="#section1"
                        className="cursor-pointer p-3 bg-white shadow-md flex justify-between items-center rounded-lg"
                        onClick={() => toggleSection('section1')}
                    >
                        <div className='flex items-center'>
                            <span className='text-[#0055FF] font-medium text-lg sm:text-xl md:text-2xl'>01</span>
                            <span className="ml-8 text-sm sm:text-base md:text-lg">Question 01</span>
                        </div>
                        <span
                            className={`text-xl border border-black text-center object-cover w-8 h-8 flex items-center justify-center rounded-full ${expandedSection === 'section1' ? 'bg-black text-white' : ''}`}
                        >
                            {expandedSection === 'section1' ? '-' : '+'}
                        </span>
                    </a>
                    {expandedSection === 'section1' && (
                        <div id="section1" className="accordion-content pl-10 pr-5 p-3 text-[#666666] text-xs sm:text-sm md:text-base bg-white rounded-b-lg shadow-md">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident.</p>
                        </div>
                    )}
                </div>

                {/* Section 2 */}
                <div className="mb-2 w-full sm:w-[30rem] md:w-[36rem] lg:w-[38rem]">
                    <a
                        href="#section2"
                        className="cursor-pointer p-3 bg-[#F2F7FF] rounded-lg flex justify-between items-center"
                        onClick={() => toggleSection('section2')}
                    >
                        <div className='flex items-center'>
                            <span className='text-[#81868E] font-medium text-lg sm:text-xl md:text-2xl'>02</span>
                            <span className="ml-8 text-sm sm:text-base md:text-lg">Question 02</span>
                        </div>
                        <span
                            className={`text-xl border border-black text-center object-cover w-8 h-8 flex items-center justify-center rounded-full ${expandedSection === 'section2' ? 'bg-black text-white' : ''}`}
                        >
                            {expandedSection === 'section2' ? '-' : '+'}
                        </span>
                    </a>
                    {expandedSection === 'section2' && (
                        <div id="section2" className="accordion-content pl-10 pr-5 p-3 text-[#666666] text-xs sm:text-sm md:text-base bg-white rounded-b-lg shadow-md">
                            <p>Details about Question 02...</p>
                        </div>
                    )}
                </div>

                {/* Section 3 */}
                <div className="mb-2 w-full sm:w-[30rem] md:w-[36rem] lg:w-[38rem]">
                    <a
                        href="#section3"
                        className="cursor-pointer p-3 bg-[#F2F7FF] rounded-lg flex justify-between items-center"
                        onClick={() => toggleSection('section3')}
                    >
                        <div className='flex items-center'>
                            <span className='text-[#81868E] font-medium text-lg sm:text-xl md:text-2xl'>03</span>
                            <span className="ml-8 text-sm sm:text-base md:text-lg">Question 03</span>
                        </div>
                        <span
                            className={`text-xl border border-black text-center object-cover w-8 h-8 flex items-center justify-center rounded-full ${expandedSection === 'section3' ? 'bg-black text-white' : ''}`}
                        >
                            {expandedSection === 'section3' ? '-' : '+'}
                        </span>
                    </a>
                    {expandedSection === 'section3' && (
                        <div id="section3" className="accordion-content pl-10 pr-5 p-3 text-[#666666] text-xs sm:text-sm md:text-base bg-white rounded-b-lg shadow-md">
                            <p>Details about Question 03...</p>
                        </div>
                    )}
                </div>

                {/* Section 4 */}
                <div className="mb-2 w-full sm:w-[30rem] md:w-[36rem] lg:w-[38rem]">
                    <a
                        href="#section4"
                        className="cursor-pointer p-3 bg-[#F2F7FF] rounded-lg flex justify-between items-center"
                        onClick={() => toggleSection('section4')}
                    >
                        <div className='flex items-center'>
                            <span className='text-[#81868E] font-medium text-lg sm:text-xl md:text-2xl'>04</span>
                            <span className="ml-8 text-sm sm:text-base md:text-lg">Question 04</span>
                        </div>
                        <span
                            className={`text-xl border border-black text-center object-cover w-8 h-8 flex items-center justify-center rounded-full ${expandedSection === 'section4' ? 'bg-black text-white' : ''}`}
                        >
                            {expandedSection === 'section4' ? '-' : '+'}
                        </span>
                    </a>
                    {expandedSection === 'section4' && (
                        <div id="section4" className="accordion-content pl-10 pr-5 p-3 text-[#666666] text-xs sm:text-sm md:text-base bg-white rounded-b-lg shadow-md">
                            <p>Details about Question 04...</p>
                        </div>
                    )}
                </div>

                {/* Section 5 */}
                <div className="mb-2 w-full sm:w-[30rem] md:w-[36rem] lg:w-[38rem]">
                    <a
                        href="#section5"
                        className="cursor-pointer p-3 bg-[#F2F7FF] rounded-lg flex justify-between items-center"
                        onClick={() => toggleSection('section5')}
                    >
                        <div className='flex items-center'>
                            <span className='text-[#81868E] font-medium text-lg sm:text-xl md:text-2xl'>05</span>
                            <span className="ml-8 text-sm sm:text-base md:text-lg">Question 05</span>
                        </div>
                        <span
                            className={`text-xl border border-black text-center object-cover w-8 h-8 flex items-center justify-center rounded-full ${expandedSection === 'section5' ? 'bg-black text-white' : ''}`}
                        >
                            {expandedSection === 'section5' ? '-' : '+'}
                        </span>
                    </a>
                    {expandedSection === 'section5' && (
                        <div id="section5" className="accordion-content pl-10 pr-5 p-3 text-[#666666] text-xs sm:text-sm md:text-base bg-white rounded-b-lg shadow-md">
                            <p>Details about Question 05...</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default FAQ;
