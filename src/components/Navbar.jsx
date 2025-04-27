import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative text-white bg-gradient-to-r p-2 sm:p-3 md:p-4 from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-indigo-500/40 font-Poppins text-base sm:text-xl md:text-2xl flex justify-between items-center p-3 sm:p-4 md:p-6 font-semibold rounded-b-2xl">
            <div className='bg-white rounded px-2 '>
                <a
                    href="/title"
                    className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
             text-lg sm:text-xl md:text-2xl font-extrabold tracking-wide 
             hover:scale-105 transition-transform duration-300 ease-in-out drop-shadow-md"
                >
                    Devfolio
                </a>
            </div>

            <div className="hidden sm:flex gap-2 text-xl md:gap-4">
                <a href="/title" className="hover:text-purple-300 hover:drop-shadow-md transition-all duration-300">Home</a>
                <a href="/about" className="hover:text-purple-300 hover:drop-shadow-md transition-all duration-300">About</a>
                <a href="/project" className="hover:text-purple-300 hover:drop-shadow-md transition-all duration-300">Projects</a>
                <a href="/resume" className="hover:text-purple-300 hover:drop-shadow-md transition-all duration-300">Resume</a>
                <a href="/contact" className="hover:text-purple-300 hover:drop-shadow-md transition-all duration-300">Contact</a>
            </div>

            <div className='flex items-center gap-2 sm:gap-4'>
                <div className='text-white text-base sm:text-xl md:text-3xl flex gap-2 sm:gap-4'>
                    <a href="https://github.com/priyaagrawal123" className='hover:text-purple-500 transition-colors duration-200'><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/priya-agrawal-3b5516288/" className='hover:text-purple-500 transition-colors duration-200'><FaLinkedin /></a>
                </div>

                <button
                    className="sm:hidden text-xl ml-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-blue-700 flex flex-col items-center gap-3 py-3 sm:hidden z-10">
                    <a href="/title" className='hover:text-purple-500 transition-colors duration-200' onClick={() => setIsMenuOpen(false)}>Home</a>
                    <a href="/about" className='hover:text-purple-500 transition-colors duration-200' onClick={() => setIsMenuOpen(false)}>About</a>
                    <a href="/project" className='hover:text-purple-500 transition-colors duration-200' onClick={() => setIsMenuOpen(false)}>Projects</a>
                    <a href="/resume" className='hover:text-purple-500 transition-colors duration-200' onClick={() => setIsMenuOpen(false)}>Resume</a>
                    <a href="/contact" className='hover:text-purple-500 transition-colors duration-200' onClick={() => setIsMenuOpen(false)}>Contact</a>
                </div>
            )}
        </div>
    );
}

export default Navbar;