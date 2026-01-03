import { Globe, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { FaFacebook, FaInstagram, FaSearchLocation, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <div className='mx-10 md:mx-30 flex flex-col gap-20 py-10'>
                <div className='flex flex-col md:flex-row items-center justify-between md:gap-4'>
                    <h1 className='text-2xl font-bold text-[#102D47] dark:text-white'>WebCraftStudio</h1>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-3'>
                        <p className='text-xl font-semibold text-[#102D47] dark:text-white'>Newsletter</p>
                        <div className='border border-gray-300 rounded-sm flex'>
                            <input type="email"
                            className='focus:outline-none p-2'
                            placeholder="Enter your email" />
                            <button className='py-2 px-4 text-white bg-blue-500 font-semibold
                            border border-blue-500 hover:cursor-pointer transition-all duration-300
                             rounded-sm hover:text-blue-500 hover:bg-transparent'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-between gap-10'>
                    <div className='flex flex-col md:flex-row gap-50'>
                        <div className='flex gap-4'>
                            <div className='social-btn text-[#102D47] dark:text-white hover:text-pink-600'><FaInstagram size={25}/></div>
                            <div className='social-btn text-[#102D47] dark:text-white hover:text-blue-500'><Globe size={25}/></div>
                            <div className='social-btn text-[#102D47] dark:text-white hover:text-blue-400'><FaTwitter size={25}/></div>
                            <div className='social-btn text-[#102D47] dark:text-white hover:text-blue-600'><FaFacebook size={25}/></div>
                            <div className='social-btn text-[#102D47] dark:text-white hover:text-red-600'><FaYoutube size={25}/></div>
                        </div>
                        <div className='flex gap-20'>
                            <div className='flex flex-col gap-5'>
                                <p className='text-xl font-semibold'>Company</p>
                                <div className='flex flex-col gap-3'>
                                    <p>Projects</p>
                                    <p>Expertise</p>
                                    <p>Pricing</p>
                                    <p>Categories</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <p className='text-xl font-semibold'>Support</p>
                                <div className='flex flex-col gap-3'>
                                    <p> Help center</p>
                                    <p>Terms of service</p>
                                    <p>Legal</p>
                                    <p>Privacy Policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex gap-2 items-center'>
                            <MapPin/>
                            <p>123 Web St, Internet City, WWW 45678</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <Phone/>
                            <p>+1 (234) 567-8901</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                           <Mail/>
                           <p>contact@webcraftstudio.com</p>
                        </div>
                    </div>
                </div>
                <p>© 2024 WebCraftStudio. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer