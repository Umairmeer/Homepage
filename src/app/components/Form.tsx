// components/Form.js
import { IoMdPerson } from "react-icons/io";
import { Button } from "@/components/ui/button"
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";


// import { FaEnvelope, FaLock, FaPhone } from 'react-icons/fa';

const Form = () => {
    return (
        <>
            <div className="relative flex justify-center">
                <main className='bg-[#0055FF] overflow-hidden absolute top-[-160px] rounded-xl w-[68rem] pb-16 flex justify-around'>
                    <div>
                        <div
                            style={{
                                // height: '2.5rem',
                                background: 'linear-gradient(to bottom, rgba(35, 67, 132, 1), rgba(0, 25, 76, 1))',
                                padding: '20px',
                                color: 'white',
                                transform: 'skew(.5rad)',
                            }}
                            className=' linear-color w-40 h-[27.5rem] absolute left-[5rem] '
                        >
                        </div>
                        <p className='text-white top-20 left-16 relative text-xs'>NO OBLEATIONS</p>
                        <h1 className='text-white text-2xl relative ml-16 mt-28 '>Have an ANC Agent <br />reach out to arrange a meeting.</h1>
                    </div>

                    <div className="form relative pr-8">
                        <div className="inputs flex mt-16 gap-4">
                            <div className="field-1 relative">
                                <label htmlFor="name" className="block text-white mb-1">Your Name</label>
                                <div className="absolute mt-3 flex items-center pl-3 pointer-events-none">
                                    <IoMdPerson className="text-gray-500" />
                                </div>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                    className="pl-10 p-2 w-56 border border-gray-300 rounded-xl"
                                />
                            </div><div className="field-2 relative">
                                <label htmlFor="name" className="block text-white mb-1">Your Phone</label>
                                <div className="absolute mt-3 flex items-center pl-3 pointer-events-none">
                                <MdOutlinePhone className="opacity-35" />
                                </div>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your Phone"
                                    className="pl-10 p-2 w-56 border border-gray-300 rounded-xl"
                                />
                            </div>
                            <div className="field-3 relative">
                                <label htmlFor="name" className="block text-white mb-1">Your Email</label>
                                <div className="absolute mt-3 flex items-center pl-3 pointer-events-none">
                                <MdOutlineEmail className="opacity-25" />
                                </div>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your Email"
                                    className="pl-10 p-2 w-56 border border-gray-300 rounded-xl"
                                />

                            </div>
                        </div>
                        <div className="space-y-2 mt-16">
                            <label htmlFor="message" className="text-white ">Your Message</label>
                            <textarea
                                id="message"
                                placeholder="Your Message"
                                className="w-full h-24 p-2 border border-gray-300 rounded-xl"

                            ></textarea>
                            <Button className='bg-[#031C50] text-[#FFFFFF] border-none rounded h-9 w-40' variant="outline">GET IN TOUCH</Button>

                        </div>
                    </div>



                </main>
            </div>
        </>
    );
};

export default Form;
