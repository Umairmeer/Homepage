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
            <main id='FAQ' className='Accordion relative pb-64 flex justify-center bg-[#F2F7FF] px-4 md:px-6 lg:px-8'>
                <div className="w-full max-w-[38rem] bg-yell mx-auto">
                    <h1 className="text-3xl text-center pt-7 mb-8">FAQ's</h1>

                    {/* Section 1 */}
                    <div className="mb-2" >
                        <div
                            className={`cursor-pointer p-3 flex justify-between items-center rounded-lg w-full text-left ${expandedSection === 'section1' ? 'bg-white' : 'bg-[#F2F7FF]'}`}
                            onClick={() => toggleSection('section1')}
                        // style={{ zIndex: 10 }} // Ensure div is on top
                        >
                            <div className='flex items-center'>
                                <span className={`font-medium text-2xl ${expandedSection === 'section1' ? 'text-[#0055FF]' : 'text-[#81868E]'}`}>01</span>
                                <span className="ml-8 text-md">1. What makes Agile Networking Consultants different from other managed service providers?</span>
                            </div>
                            <span
                                className={`text-xl border translate-x-3 border-black text-center object-cover min-w-8 h-8 flex items-center justify-center rounded-full ${expandedSection === 'section1' ? 'bg-black text-white' : ''}`}
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
                            <p>Agile Networking Consultants stands out by offering a holistic approach to technology and business growth. Unlike traditional managed service providers that focus solely on IT support, we integrate strategic technology leadership, comprehensive marketing solutions, and financial management to drive business success. Our customer-driven approach ensures that all services are tailored to meet the unique needs and goals of each client, fostering long-term partnerships and growth.
                            </p>
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
                                <span className="ml-8 text-md">2. How does Agile Networking Consultants ensure customer satisfaction and support?</span>
                            </div>
                            <span
                                className={`text-xl border translate-x-3 border-black text-center object-cover min-w-8 h-8 flex items-center justify-center rounded-full ${expandedSection === 'section2' ? 'bg-black text-white' : ''}`}
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
                            <p>Customer satisfaction is at the heart of everything we do at Agile Networking Consultants. We offer personalized support and dedicated account managers for each client to ensure seamless communication and swift resolution of issues. Our proactive approach includes regular check-ins, performance reviews, and feedback loops to continuously improve our services and exceed customer expectations.
                            </p>
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
                                <span className="ml-8 text-md">3. Are you just another marketing company?</span>
                            </div>
                            <span
                                className={`text-xl border  translate-x-3 border-black text-center object-cover min-w-8 h-8 flex items-center justify-center rounded-full ${expandedSection === 'section3' ? 'bg-black text-white' : ''}`}
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
                            <p> No, Agile Networking Consultants is much more than a marketing company. While we offer comprehensive marketing solutions, including social media management, SEO, and strategic marketing development, we also provide technology and financial management services. Our unique blend of CTO, CMO, CFO, and CEO services ensures that we support all aspects of your business, driving growth through integrated solutions.</p>
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
                                <span className="ml-8 text-md">4. How do you help businesses grow with your services?</span>
                            </div>
                            <span
                                className={`text-xl border  translate-x-3 border-black text-center object-cover min-w-8 h-8 flex items-center justify-center rounded-full ${expandedSection === 'section4' ? 'bg-black text-white' : ''}`}
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
                            <p>We help businesses grow by aligning our services with their strategic goals. Our CTO services enhance technology and automation, increasing efficiency and productivity. Our CMO services boost brand visibility and market reach through tailored marketing strategies. Our CFO services provide financial insights and planning for informed decision-making. Together, these services create a cohesive approach to driving business growth and success.
                            </p>
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
                                <span className="ml-8 text-md">5. What is your approach to building long-term partnerships with customers?</span>
                            </div>
                            <span
                                className={`text-xl border translate-x-3 border-black text-center object-cover min-w-8 h-8 flex items-center justify-center rounded-full ${expandedSection === 'section5' ? 'bg-black text-white' : ''}`}
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
                            <p>At Agile Networking Consultants, we believe in growing with our customers. We focus on understanding their unique needs, challenges, and goals. Our collaborative approach involves working closely with clients to develop customized solutions and strategies that evolve with their business. By providing consistent value, ongoing support, and a commitment to their success, we build strong, long-term partnerships that foster mutual growth.</p>
                        </motion.div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default FAQ;
