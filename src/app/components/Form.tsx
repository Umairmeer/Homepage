// components/Form.js
import { IoMdPerson } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { useState, useRef } from "react";


const Form = () => {
    const formRef = useRef(null);

    const [formData, setFormData] = useState({})

    async function handleSubmit(event: any) {
        event.preventDefault();
        console.log(formData)

        // const formData = new FormData(event.target)

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        console.log(response)
        formRef?.current?.reset();
    };


    return (
        <>
            <div id="userForm" className="relative flex justify-center px-4 lg:px-0">
                <main className='bg-[#0055FF] overflow-hidden absolute top-[-160px] rounded-xl w-full max-w-6xl pb-16 flex flex-col lg:flex-row lg:justify-around lg:w-[68rem]'>
                    <div className="relative lg:w-1/3 lg:ml-1">
                        <div
                            style={{
                                background: 'linear-gradient(to bottom, rgba(35, 67, 132, 1), rgba(0, 25, 76, 1))',
                                padding: '20px',

                                color: 'white',
                                transform: 'skew(.5rad)',
                            }}
                            className='linear-color w-40 h-[27.5rem] absolute left-0 lg:left-[5rem] hidden lg:block'
                        >
                        </div>
                        <p className='text-white top-20 left-4 lg:left-16 relative text-xs lg:text-base'>NO OBLIGATIONS</p>
                        <h1 className='text-white text-xl lg:text-2xl relative ml-4 lg:ml-16 mt-16 pt-6 lg:mt-28'>Have an Agile Networking <br /> Consultant reach out to arrange a meeting.</h1>
                    </div>

                    <div className="form relative pr-4 lg:pr-8 lg:w-2/3 mt-16 lg:mt-0">
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <div className="inputs flex flex-col lg:flex-row gap-4">
                                <div className="field-1 pt-8 relative w-full lg:w-1/3">
                                    <label htmlFor="name" className="block text-white mb-1">Your Name</label>
                                    <div className="absolute mt-3 flex items-center pl-3 pointer-events-none">
                                        <IoMdPerson className="text-gray-500" />
                                    </div>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Your Name"
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="pl-10 p-2 w-full border border-gray-300 rounded-xl"
                                    />
                                </div>
                                <div className="field-2 relative pt-8 w-full lg:w-1/3">
                                    <label htmlFor="phone" className="block text-white mb-1">Your Phone</label>
                                    <div className="absolute mt-3 flex items-center pl-3 pointer-events-none">
                                        <MdOutlinePhone className="opacity-35" />
                                    </div>
                                    <input
                                        type="text"
                                        id="phone"
                                        placeholder="Your Phone"
                                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                        className="pl-10 p-2 w-full border border-gray-300 rounded-xl"
                                    />
                                </div>
                                <div className="field-3 pt-8 relative w-full lg:w-1/3">
                                    <label htmlFor="email" className="block text-white mb-1">Your Email</label>
                                    <div className="absolute mt-3 flex items-center pl-3 pointer-events-none">
                                        <MdOutlineEmail className="opacity-25" />
                                    </div>
                                    <input
                                        type="text"
                                        id="email"
                                        placeholder="Your Email"
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="pl-10 p-2 w-full border border-gray-300 rounded-xl"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 pt-8 mt-8 lg:mt-16">
                                <label htmlFor="message" className="text-white">Your Message</label>
                                <textarea
                                    id="message"
                                    placeholder="Your Message"
                                    className="w-full h-24 p-2 border border-gray-300 rounded-xl"
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                                <input type="submit" className='bg-[#031C50] text-[#FFFFFF] hover:text-white border-transparent hover:border-[#00194C] rounded h-9 w-full lg:w-40 active:opacity-60' value={'GET IN TOUCH'} ></input>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Form;
