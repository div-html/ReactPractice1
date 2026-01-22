import React from 'react'
import { ExternalLink, Github, Sun } from 'lucide-react';
const Navbar = () => {
    return (
        <>
            <div className="nav flex justify-between px-4 py-6 font-geist bg-zinc-950 text-white backdrop-blur-lg sticky top-0 z-50 border-b border-zinc-900">

                <div className="left flex gap-4">
                    <p className='font-bold text-white'>Divyam's Portfolio</p>
                    <a href="https://www.linkedin.com/in/divyam-pariyar-99303a371/" className='text-gray-300' target="_blank" rel="noreferrer">
                        Linkedin <ExternalLink size={13} className="ml-2 inline" />
                    </a>
                    <a href="" className='text-gray-300' target="_blank" rel="noreferrer">
                        Resume<ExternalLink size={13} className="ml-2 inline" />
                    </a>

                </div>
                <div className="right flex gap-4">
                    <input
                        type="text"
                        name="search"
                        id="search"
                        autoComplete='off'
                        placeholder="Search sections..."
                        className="w-full bg-zinc-900/50 border border-zinc-800 text-zinc-100 placeholder:text-zinc-500 px-4 py-1.5 rounded-md transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-zinc-700 focus:border-zinc-600"
                    />
                    <a
                        href="https://github.com/div-html"
                        className="p-2 rounded-md hover:bg-zinc-800 transition-colors"
                        aria-label="GitHub Profile"
                    >
                        <Github size={20} strokeWidth={1.5} />
                    </a>

                    <button
                        className="p-2 rounded-md hover:bg-zinc-800 transition-colors"
                        aria-label="Toggle Theme"
                    >
                        <Sun size={20} strokeWidth={1.5} />
                    </button>
                </div>
            </div>


        </>
    )
}

export default Navbar
