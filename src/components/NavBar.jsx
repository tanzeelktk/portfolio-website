import { Search } from 'lucide-react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { Menu, X } from "lucide-react";
import { useEffect, useState } from 'react';

function NavBar({ menuOpen, setMenuOpen, theme, setTheme, isScrolled, setIsScrolled }) {
    

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])


    return (
        <>
            <div className={`w-full flex justify-between items-center px-6 transition-all duration-500 fixed
                ${isScrolled
                    ? "top-0 left-0 z-50 bg-white dark:bg-blue-950 shadow-lg py-4"
                    : "bg-transparent py-6"
                }`}>
                <div className="w-[15%] text-[#102D47] dark:text-white"><h2 className='text-2xl font-bold'>WebCraftStudio</h2></div>
                <div className="w-[40%]  hidden 2xl:flex justify-between">
                    <a className='nav-links' href="#">Home</a>
                    <a className='nav-links' href="#projects">Projects</a>
                    <a className='nav-links' href="#expertise">Our Services</a>
                    <a className='nav-links' href="#categories">Categories</a>
                    <a className='nav-links' href="#pricing">Pricing</a>
                    <a className='nav-links' href="#contact">Contact Us</a>
                </div>
                <div className="w-[30%] flex  justify-end items-center">
                    <div className="w-[50%] items-center border border-indigo-800 focus-within:border-indigo-500 rounded-sm py-2 px-2 hidden 2xl:flex">
                        <input className="outline-none bg-transparent w-[90%] dark:text-white
                         placeholder:text-indigo-500 placeholder:opacity-30" placeholder='Search' />
                        <Search className='text-indigo-500' />
                    </div>
                    <div className='p-2 mx-4 bg-gray-200 rounded-2xl hover:text-blue-500 hover:cursor-pointer dark:text-white dark:bg-sky-800'
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} role="button" aria-label="Toggle theme">

                        {theme === 'dark' ? <FaSun /> : <FaMoon />} </div>
                    {/* Mobile hamburger */}
                    <button className="mr-4 2xl:hidden dark:text-white" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X className='transition-all duration-200' /> : <Menu />}
                    </button>
                    <button className='px-2 py-2 mr-4 font-semibold bg-blue-500 hover:bg-transparent border border-blue-500 hover:border-blue-500 hover:text-blue-500
                     hover:cursor-pointer text-white rounded-sm transition-all duration-300 hidden 2xl:flex'>Contact Us</button>
                </div>

            </div>
            {/* Mobile Menu */}

            <div className={`2xl:hidden mt-6 flex items-center flex-col gap-4 w-[60%] fixed right-0 top-12 py-4
             bg-white dark:bg-blue-950 transform transition-transform duration-300
                            ${menuOpen ? "translate-x-0" : "translate-x-full"} z-50`}>
                <button className="nav-links">Home</button>
                <button className="nav-links">Projects</button>
                <button className="nav-links">About</button>
                <div className="w-[70%] flex border border-indigo-800 focus-within:border-indigo-500 rounded-sm py-2 px-2">
                    <input className="outline-none bg-transparent w-[90%] dark:text-white
                         placeholder:text-indigo-500 placeholder:opacity-30" placeholder='Search' />
                    <Search className='text-indigo-500' />
                </div>
                <button className="px-4 py-2 bg-blue-500 text-white rounded">
                    Contact Us
                </button>
            </div>

        </>
    )
}
export default NavBar;