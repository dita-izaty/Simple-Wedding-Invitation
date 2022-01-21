import React from 'react'
import profile from '../images/couple.png'
import logodir from '../images/logodir.png'
import meant2be from '../audio/meant2be.mp3'

function Card() {
    return (
        <div className='min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 py-20 px-3'>
            <div className='flex flex-col justify-center max-w-xs mx-auto bg-gradient-to-r from-borahe to-fuchsia-200 shadow-xl rounded-xl py-12 px-12 '>
                <div className=''>
                    <img className='w-32 mx-auto shadow-xl rounded-full drop-shadow-sm' src={profile} alt = 'profile sc'/>
                </div>
                <div className='text-center mt-5'>
                    <span className='text-md sm:text-base font-bold text-brown-300'>
                        We Invite You To Celeberate Our Wedding
                    </span>
                    
                    <p className='text-xl md:text-2xl mt-3 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-extrabold'>
                        Ida & Oki
                    </p>
                    <div className='flex align-center just-center mt-3'></div>
                    <p className='text-xs xs:text-base bg-clip-text opacity-75 bg-gradient-to-r from-pink-200 to-brown-200 font-medium italic pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
                        Minggu, 6 Februari 2022
                    </p>
                </div>              
            </div>
            
            <div className='bg-white-700 text-sm text-white text-center inset-x-0 bottom-0 p-9'>
                <audio className='object-center mx-auto mt-1 mb-7' autoPlay='{true}' allow='autoplay' src={meant2be} controls>
                    <p>If you are reading this, it is because your browser does not support the audio element.</p>
                </audio>
                
                <footer className='text-stone-300 mt-5 opacity-70'>
                    Created with 💙 by
                    <a href='mailto:me.izatyproject@gmail.com' className='text-stone-300 underline decoration-orange-800 hover:text-brown-300'> Dita Izaty </a>
                    <p className=''>
                        <img className='w-12 mx-auto justify-center' src={logodir} alt = 'logo dir'/>
                    </p>
                </footer>

                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-chevrons-down mx-auto mt-2 text-pink-800 animate-bounce'><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg>
            </div>
        </div>
    )
}

export default Card
