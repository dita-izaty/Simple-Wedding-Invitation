import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

function Navbar() {
    return (
            <div>

                <nav className='fixed bottom-10 rounded-lg inset-x-6 bg-blue-600 flex justify-between text-sm text-black-800 uppercase font-semibold'>
                    
                    <Link to="/home" class="w-full block py-5 px-3 text-center hover:bg-black-200 hover:text-white transition duration-300">
                        <svg className="w-5 h-5 mb-2 mx-auto" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        Home
                    </Link>

                    <Link to="/couple" class="w-full block py-5 px-3 text-center hover:bg-black-200 hover:text-white transition duration-300">
                        <svg className="w-5 h-5 mb-2 mx-auto" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                        Couple
                    </Link>

                    <Link to="/event" class="w-full block py-5 px-3 text-center hover:bg-black-200 hover:text-white transition duration-300">
                        <svg className="w-5 h-5 mb-2 mx-auto" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        Event
                    </Link>

                    <Link to="/gallery" class="w-full block py-5 px-3 text-center hover:bg-black-200 hover:text-white transition duration-300">
                        <svg className="w-5 h-5 mb-2 mx-auto" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        Gallery
                    </Link>
                </nav>
            </div>
    )
}

export default Navbar
