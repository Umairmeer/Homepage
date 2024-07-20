"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
    const [expandedSection, setExpandedSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        console.log('Toggling section:', section); // Debug log
        if (expandedSection === section) setExpandedSection(null)
        else {
            setExpandedSection(section)
        }
        // setExpandedSection(prev => {
        //     const newSection = prev === section ? null : section;
        //     console.log('Setting expandedSection to:', newSection); // Debug log
        //     return newSection;
        // });
    };

    const variants = {
        hidden: { height: 0, opacity: 0 },
        visible: { height: 'auto', opacity: 1 }
    };

    return (
        <>
            <main className='Accordion relative pb-64 flex justify-center bg-[#F2F7FF] px-4 md:px-6 lg:px-8'>
                <div className="w-full max-w-[38rem] bg-yell mx-auto">
                    <h1 className="text-3xl text-center pt-7 mb-8">FAQ's</h1>

                    {/* Section 1 */}
                    <div className="mb-2">
                        <div
                            className={`cursor-pointer p-3 flex justify-between items-center rounded-lg w-full text-left ${expandedSection === 'section1' ? 'bg-white' : 'bg-[#F2F7FF]'}`}
                            onClick={() => toggleSection('section1')}
                        // style={{ zIndex: 10 }} // Ensure div is on top
                        >
                            <div className='flex items-center'>
                                <span className={`font-medium text-2xl ${expandedSection === 'section1' ? 'text-[#0055FF]' : 'text-[#81868E]'}`}>01</span>
                                <span className="ml-8 text-lg">Question 01</span>
                            </div>
                            <span
                                className={`text-xl border translate-x-3 border-black text-center object-cover w-8 h-8 flex items-center justify-center rounded-full ${expandedSection === 'section1' ? 'bg-black text-white' : ''}`}
                            >
                                {expandedSection === 'section1' ? '-' : '+'}
                            </span>
                        </div>
                        <motion.div
                            initial="hidden"
                            animate={expandedSection === 'section1' ? 'visible' : 'hidden'}
                            variants={variants}
                            transition={{ duration: 0.3 }}
                            className="accordion-content pl-4 pr-4 py-2 text-[#666666] text-xs bg-white rounded-b-lg"
                        >
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident.</p>
                        </motion.div>
                    </div>

                    {/* Section 2 */}
                    <div className="mb-2">
                        <div
                            className={`cursor-pointer p-3 flex justify-between items-center rounded-lg w-full text-left ${expandedSection === 'section2' ? 'bg-white' : 'bg-[#F2F7FF]'}`}
                            onClick={() => toggleSection('section2')}
                        // style={{ zIndex: 10 }} // Ensure div is on top
                        >
                            <div className='flex items-center'>
                                <span className={`font-medium text-2xl ${expandedSection === 'section2' ? 'text-[#0055FF]' : 'text-[#81868E]'}`}>02</span>
                                <span className="ml-8 text-lg">Question 02</span>
                            </div>
                            <span
                                className={`text-xl border translate-x-3 border-black text-center object-cover w-8 h-8 flex items-center justify-center rounded-full ${expandedSection === 'section2' ? 'bg-black text-white' : ''}`}
                            >
                                {expandedSection === 'section2' ? '-' : '+'}
                            </span>
                        </div>
                        <motion.div
                            initial="hidden"
                            animate={expandedSection === 'section2' ? 'visible' : 'hidden'}
                            variants={variants}
                            transition={{ duration: 0.3 }}
                            className="accordion-content pl-4 pr-4 py-2 text-[#666666] text-xs bg-white rounded-b-lg"
                        >
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident.</p>
                        </motion.div>
                    </div>

                    {/* Section 3 */}
                    <div className="mb-2">
                        <div
                            className={`cursor-pointer p-3 flex justify-between items-center rounded-lg w-full text-left ${expandedSection === 'section3' ? 'bg-white' : 'bg-[#F2F7FF]'}`}
                            onClick={() => toggleSection('section3')}
                        // style={{ zIndex: 10 }} // Ensure div is on top
                        >
                            <div className='flex items-center'>
                                <span className={`font-medium text-2xl ${expandedSection === 'section3' ? 'text-[#0055FF]' : 'text-[#81868E]'}`}>03</span>
                                <span className="ml-8 text-lg">Question 03</span>
                            </div>
                            <span
                                className={`text-xl border  translate-x-3 border-black text-center object-cover w-8 h-8 flex items-center justify-center rounded-full ${expandedSection === 'section3' ? 'bg-black text-white' : ''}`}
                            >
                                {expandedSection === 'section3' ? '-' : '+'}
                            </span>
                        </div>
                        <motion.div
                            initial="hidden"
                            animate={expandedSection === 'section3' ? 'visible' : 'hidden'}
                            variants={variants}
                            transition={{ duration: 0.3 }}
                            className="accordion-content pl-4 pr-4 py-2 text-[#666666] text-xs bg-white rounded-b-lg"
                        >
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident.</p>
                        </motion.div>
                    </div>

                    {/* Section 4 */}
                    <div className="mb-2">
                        <div
                            className={`cursor-pointer p-3 flex justify-between items-center rounded-lg w-full text-left ${expandedSection === 'section4' ? 'bg-white' : 'bg-[#F2F7FF]'}`}
                            onClick={() => toggleSection('section4')}
                        // style={{ zIndex: 10 }} // Ensure div is on top
                        >
                            <div className='flex items-center'>
                                <span className={`font-medium text-2xl ${expandedSection === 'section4' ? 'text-[#0055FF]' : 'text-[#81868E]'}`}>04</span>
                                <span className="ml-8 text-lg">Question 04</span>
                            </div>
                            <span
                                className={`text-xl border  translate-x-3 border-black text-center object-cover w-8 h-8 flex items-center justify-center rounded-full ${expandedSection === 'section4' ? 'bg-black text-white' : ''}`}
                            >
                                {expandedSection === 'section4' ? '-' : '+'}
                            </span>
                        </div>
                        <motion.div
                            initial="hidden"
                            animate={expandedSection === 'section4' ? 'visible' : 'hidden'}
                            variants={variants}
                            transition={{ duration: 0.3 }}
                            className="accordion-content pl-4 pr-4 py-2 text-[#666666] text-xs bg-white rounded-b-lg"
                        >
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident.</p>
                        </motion.div>
                    </div>

                    {/* Section 5 */}
                    <div className="mb-2">
                        <div
                            className={`cursor-pointer p-3 flex justify-between items-center rounded-lg w-full text-left ${expandedSection === 'section5' ? 'bg-white' : 'bg-[#F2F7FF]'}`}
                            onClick={() => toggleSection('section5')}
                        // style={{ zIndex: 10 }} // Ensure div is on top
                        >
                            <div className='flex items-center'>
                                <span className={`font-medium text-2xl ${expandedSection === 'section5' ? 'text-[#0055FF]' : 'text-[#81868E]'}`}>05</span>
                                <span className="ml-8 text-lg">Question 05</span>
                            </div>
                            <span
                                className={`text-xl border translate-x-3 border-black text-center object-cover w-8 h-8 flex items-center justify-center rounded-full ${expandedSection === 'section5' ? 'bg-black text-white' : ''}`}
                            >
                                {expandedSection === 'section5' ? '-' : '+'}
                            </span>
                        </div>
                        <motion.div
                            initial="hidden"
                            animate={expandedSection === 'section5' ? 'visible' : 'hidden'}
                            variants={variants}
                            transition={{ duration: 0.3 }}
                            className="accordion-content pl-4 pr-4 py-2 text-[#666666] text-xs bg-white rounded-b-lg"
                        >
                            <p>Details about Question 05...</p>
                        </motion.div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default FAQ;
