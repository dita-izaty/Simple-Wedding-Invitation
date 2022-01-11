import React from 'react'
import logodir from '../images/logodir.png'

const Footer = () => {
    return (
        <div class="bg-white-700 text-sm text-center inset-x-0 bottom-0 p-2 bg-slate-700">
            <footer className='mt-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-500'>
                Built with 💙 by   
                <a href='mailto:me.izatyproject@gmail.com' className='underline decoration-pink-500 text-cream text-underline-offset-4 hover:text-pink-500'> Dita Izaty  </a>
                <p className=''>
                    <img className='w-12 mx-auto justify-center' src={logodir} alt = 'logo dir'/>
                </p>
            </footer>
        </div>
    )
}

export default Footer
