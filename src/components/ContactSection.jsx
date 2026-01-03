import React from 'react'

const ContactSection = () => {
    return (
        <section id="contact" className='my-30'>
            <div>
                <p className='text-[#102D47] text-5xl font-bold dark:text-white'>Get In Touch</p>
                <div className=' mx-10 md:mx-30 my-15 py-10 px-10 border border-gray-300 flex flex-col gap-5 rounded-xl'>
                    <div className='flex flex-col md:flex-row w-full gap-5'>
                        <div className='flex flex-col gap-4 w-full md:w-1/2'>
                            <label className='text-left'>First Name</label>
                            <input className='border border-gray-400 w-full py-3 px-2 rounded-xl focus:outline-none focus:border-blue-500' 
                                placeholder='Jhon'
                            />
                        </div>
                        <div className='flex flex-col gap-4 w-full md:w-1/2'>
                            <label className='text-left'>Last Name</label>
                            <input className='border border-gray-400 w-full py-3 px-2 rounded-xl focus:outline-none focus:border-blue-500' placeholder='Doe' />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row w-full gap-5'>
                        <div className='flex flex-col gap-4 w-full md:w-1/2'>
                            <label className='text-left'>Email</label>
                            <input className='border border-gray-400 w-full py-3 px-2 rounded-xl focus:outline-none focus:border-blue-500' placeholder='john.doe@example.com' />
                        </div>
                        <div className='flex flex-col gap-4 w-full md:w-1/2'>
                            <label className='text-left'>Phone Number</label>
                            <input className='border border-gray-400 w-full py-3 px-2 rounded-xl focus:outline-none focus:border-blue-500' placeholder='+1 (555) 123-4567' />
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-4'>
                        <label className='text-left'>Message</label>
                        <textarea className='border border-gray-400 h-17 px-2 py-3 w-full rounded-xl focus:outline-none focus:border-blue-500' placeholder='Anything else you wana communicate'/>
                    </div>
                    <button className='bg-[#102D47] text-white py-3 px-6 rounded-xl w-30'>Submit</button>

                </div>

            </div>

        </section>
    )
}

export default ContactSection