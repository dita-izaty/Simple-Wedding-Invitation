import React from 'react'
import meera from '../images/Meera.png'
import chakra from '../images/Chakra.png'

function Home() {
    return (
        <div className='min-h-screen sm:text-left flex items-center justify-center'> 
            <div className='relative h-32 w-32 ...'>
                <div className='absolute h-14 w-14 -left-4 -top-4 ...'></div>
                <img className='w-32 mx-auto drop-shadow-sm' src ={meera} alt = 'profile idaa'/>
            </div>
            <div className=''>
            </div>
            <div className=''>
                <img className='w-32 mx-auto drop-shadow-sm' src={chakra} alt = 'profile okii'/>
            </div>
        </div>
    )
}

export default Home

