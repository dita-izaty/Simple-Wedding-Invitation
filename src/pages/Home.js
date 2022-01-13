import React from 'react'
import idaa from '../images/Idaa.png'
import okii from '../images/Okii.png'

function Home() {
    return (
        <div className='min-h-screen sm:text-left flex items-center justify-center'> 
            <div className='relative h-32 w-32 ...'>
                <div className='absolute h-14 w-14 -left-4 -top-4 ...'></div>
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

