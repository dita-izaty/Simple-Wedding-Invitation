import React from 'react'
import idaa from '../images/Idaa.png'
import okii from '../images/Okii.png'

function Home() {
    return (
        <div className='min-h-screen sm:text-left flex items-center justify-center'> 

            {/* <div class="text-md font-extrabold text-center">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    We Invite You To Celeberate Our Wedding
                </span>
                <p></p>
                <p class="bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-500">
                    The Wedding Of
                </p>
            </div> */}

            <div class="relative h-32 w-32 ...">
                <div class="absolute h-14 w-14 -left-4 -top-4 ..."></div>
                <img className='w-32 mx-auto drop-shadow-sm' src ={idaa} alt = 'profile idaa'/>
            </div>
            <div className=''>
            </div>
            <div className=''>
                <img className='w-32 mx-auto drop-shadow-sm' src={okii} alt = 'profile okii'/>
            </div>
        </div>
    )
}

export default Home

