import React, { useState } from 'react'
import Image from 'next/image'
import MultiRangeSlider from "multi-range-slider-react";
import { Input } from '@/components/ui/input';
import { Button } from "@/components/ui/button"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


function PlanCard() {
    const [screenNum, setScreenNum] = useState(1)
    const [minValue, set_minValue] = useState(25);
    const [maxValue, set_maxValue] = useState(75);
    const handleInput = (e: any) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };

    const AmountOfUsers = () => {
        return (
            <>
                <img alt='header' src={'/whatPage/Group 10 (1).png'} width={600} />
                <div className='flex flex-col justify-center items-center py-10'>
                    <p className='font-semibold text-lg mblres:text-3xl text-[#00194C]'>How many users do you have in your workplace?</p>
                    <MultiRangeSlider
                        min={0}
                        max={100}
                        step={5}
                        minValue={minValue}
                        maxValue={maxValue}
                        ruler={false}
                        barInnerColor='#32A6F9'
                        style={{
                            border: 'none', boxShadow: 'none'
                        }}
                        // label={false}
                        className='w-72 mt-16 mb-8'
                        onInput={(e) => {
                            handleInput(e);
                        }}
                    />
                    <div className="flex items-center ">
                        <Input type='checkbox' id='airplane-mode' className='w-4 m-4 ' />
                        <label className=" text-[15px] font-semibold pr-[15px] mt-1" htmlFor="airplane-mode">
                            Do you have more than 100 users?
                        </label>
                    </div>
                </div>
            </>
        )
    }

    const Requirements = () => {
        return (
            <>
                <img alt='header' src={'/whatPage/Group 16.png'} width={600} />
                <div className='flex flex-col justify-center items-center py-10 mblres:w-[100%]'>
                    <p className='font-semibold text-lg text-[#00194C] text-center'>With Cortavo, all of our plans come with 24/7 IT Support, Cybersecurity, and Software.</p>
                    <div className="flex items-center my-6 mblres:w-[100%] mblres:text-sm">
                        <p className=" text-[15px] w-96 text-sm text-[#5F6266]">
                            Do you already have staff in place to manage your IT Systems?
                        </p>
                        <Input type='radio' defaultChecked={true} id='software-support-yes' name='software-support' className='w-4 m-2' />
                        <label htmlFor="software-support-yes" className='text-[#5F6266] text-sm'>Yes</label>
                        <div className='m-4'></div>
                        <Input type='radio' id='software-support-no' name='software-support' className='w-4 m-2' />
                        <label htmlFor="software-support-no" className='text-[#5F6266] text-sm'>No</label>
                    </div>
                    <div className="flex items-center mb-6 mblres:w-[100%] mblres:text-sm">
                        <p className=" text-[15px] w-96 text-sm text-[#5F6266] ">
                            Do you already have staff in place to manage your Marketing?
                        </p>
                        <Input type='radio' defaultChecked={true} id='hardware-support-yes' name='hardware-support' className='w-4 m-2' />
                        <label htmlFor="hardware-support-yes" className='text-[#5F6266] text-sm'>Yes</label>
                        <div className='m-4'></div>
                        <Input type='radio' id='hardware-support-no' name='hardware-support' className='w-4 m-2' />
                        <label htmlFor="hardware-support-no" className='text-[#5F6266] text-sm'>No</label>
                    </div>
                    <div className="flex items-center mb-6">
                        <p className=" text-[15px] w-96 text-sm text-[#5F6266] mblres:w-[100%] mblres:text-sm">
                            Do you already have staff in place to manage your Business/ Administrative needs?
                        </p>
                        <Input type='radio' defaultChecked={true} id='adminNeeds-yes' name='adminNeeds' className='w-4 m-2' />
                        <label htmlFor="adminNeeds-yes" className='text-[#5F6266] text-sm'>Yes</label>
                        <div className='m-4'></div>
                        <Input type='radio' id='adminNeeds-no' name='adminNeeds' className='w-4 m-2' />
                        <label htmlFor="adminNeeds-no" className='text-[#5F6266] text-sm'>No</label>
                    </div>
                </div>
            </>
        )
    }

    const YourPlan = () => {
        return (
            <>
                <img alt='header' src={'/whatPage/Group 16 (1).png'} width={600} />
                <div className='flex flex-col justify-center items-center py-10'>
                    <p className='font-semibold text-lg text-[#00194C] text-center'>Show Me The Best Plan!</p>
                    <div className="flex items-center my-4">
                        <p className=" text-[15px] text-center text-sm text-[#5F6266]">
                            In order for us to know if our CMO, CFO, CTO or CEO plan <br/>Plan is the best for you we'll need to know who we are quoting.
                        </p>
                    </div>
                    <div className="flex justify-center items-center flex-col mb-6 w-96 mblres:w-[100%]">
                        <p className=" text-[15px] text-sm text-[#5F6266] m-4">
                            Please enter your email*
                        </p>
                        <Input type='email' placeholder='Email' id='email' name='email' className='rounded-xl border-[#0055FF] px-4 ' />
                    </div>
                </div>
            </>
        )
    }

    const ConnectivityPlan = () => {
        return (
            <>
                <img alt='header' src={'/whatPage/Group 16 (2).png'} width={600} />
                <div className='flex flex-col justify-center items-center py-10'>
                    <p className='font-semibold text-lg text-[#00194C] text-center'>Your Plan</p>
                    <div className="my-4">
                        <p className=" text-[15px] text-center text-sm text-[#5F6266]">
                            Based on your needs we recommend the Cortavo Connectivity Plan.
                        </p>
                    </div>
                    <div className="my-4">
                        <p className=" text-[15px] text-center text-sm text-[#5F6266] font-semibold">
                            Please let us know how long you will need the Connectivity Plan.
                        </p>
                        <p className=" text-[15px] text-center text-sm text-[#5F6266]">
                            Please select between: 36 month, 24 month, or 12 month terms
                        </p>
                    </div>
                    <div className="flex justify-center items-center flex-col mb-6 w-96 mblres:w-[100%]">
                        <Select>
                            <SelectTrigger className="max-w-96 rounded border-[#0055FF]">
                                <SelectValue placeholder="Number of Months" />
                            </SelectTrigger>
                            <SelectContent className='bg-white border'>
                                <SelectItem value="36Months" className='bg-white font-semibold '>36 month</SelectItem>
                                <SelectItem value="24Months" className='bg-white font-semibold '>24 month</SelectItem>
                                <SelectItem value="12Months" className='bg-white font-semibold '>12 month </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </>
        )
    }

    const PlanBudgetScreen = () => {
        return (
            <>
                <img alt='header' src={'/whatPage/Group 16 (2).png'} width={600} />
                <div className='flex flex-col justify-center items-center py-10'>
                    <p className='font-semibold text-lg text-[#00194C] text-center'>Hybrid Plan</p>
                    <div className="flex items-center my-4">
                        <p className=" text-[15px] text-center text-sm text-[#5F6266] my-4">
                            We estimate your Hybrid Plan will be:
                        </p>
                    </div>
                    <div className="flex justify-center items-center flex-col mb-6 w-96">
                        <span className=' text-4xl text-center font-bold text-[#495AFF] my-6'>
                            $5,580 <br />
                            per month
                        </span>
                    </div>
                </div>
            </>
        )
    }


    return (
        <div className=' max-w-screen-2xl m-auto relative flex flex-col justify-center items-center py-20'>

            {/* backgroundImages */}
            <Image alt='bg faded divs' src={'/whatPage/Rectangle 1313.png'} width={100} height={100} className=' absolute top-0 left-0' />
            <Image alt='bg faded divs' src={'/whatPage/Rectangle 1314.png'} width={200} height={200} className=' absolute top-0 left-0' />
            <Image alt='bg faded divs' src={'/whatPage/Rectangle 1302.png'} width={300} height={300} className=' absolute top-0 right-0' />
            <Image alt='bg faded divs' src={'/whatPage/Rectangle 1312.png'} width={200} height={200} className=' absolute top-80 right-0' />


            {/* Card Heading and card */}
            <h1 className=' text-4xl font-semibold mblres:text-center'>Which plan is best for you?</h1>
            <div className='px-32 py-10 border-2  border-black mt-10 rounded-[6px] mblres:w-[100%] mblres:px-16'>
                {screenNum === 1 ? AmountOfUsers() : null}
                {screenNum === 2 ? Requirements() : null}
                {screenNum === 3 ? YourPlan() : null}
                {screenNum === 4 ? ConnectivityPlan() : null}
                {screenNum === 5 ? PlanBudgetScreen() : null}
                <div className='flex justify-center'>
                    {screenNum !== 1 ? (
                        <>
                            <button onClick={() => {
                                console.log(screenNum)
                                if (screenNum === 1) return
                                setScreenNum(screenNum - 1)
                            }} className='border-[#0055FF] border rounded-xl text-[#0055FF] hover:text-white hover:bg-[#0055FF] px-14 py-4 text-md'>Back</button>
                            <div className='m-2'></div>
                        </>
                    ) : null}
                    {screenNum !== 5 ? (
                        <>
                            <button onClick={() => {
                                console.log(screenNum)
                                if (screenNum === 5) return
                                setScreenNum(screenNum + 1)
                            }} className='bg-[#0055FF] border rounded-xl text-white hover:border-[#0055FF] hover:text-[#0055FF] mblres:hover:text-white px-14 py-4 text-md'>Next</button>
                        </>
                    ) : null}


                </div>
            </div>
        </div>
    )
}

export default PlanCard