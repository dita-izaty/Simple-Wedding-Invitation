import React from 'react'

function Event() {
    return (
        <div className='text-md text-center mt-7 mb-0 font-normal text-brown-250 leading-relaxed'>
            Yang Insya Allah akan di selenggarakan pada :

            <div className='text-md font-extrabold text-center my-7'>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                    Hari, Tanggal :
                </span>
                <p className='bg-clip-text font-medium text-transparent bg-gradient-to-r from-white to-violet-500'>
                    Minggu, 06 Februari 2022
                </p>
            </div>

            <div className='text-md font-extrabold text-center my-7'>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                    Akad & Resepsi Pernikahan :
                </span>
                
                <p className='bg-clip-text font-medium text-transparent bg-gradient-to-r from-white to-violet-500'>
                    10:00 - selesai | 11:00 - 14:00 WIB
                </p>
            </div>
            
            <div className='text-md font-extrabold text-center my-7'>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                    Bertempat di :
                </span>
                    
                <p className='bg-clip-text font-medium text-transparent bg-gradient-to-r from-white to-violet-500'>
                    Masjid Baitul Muslimin
                </p>
                <p className='text-sm font-normal mt-4 mb-0 italic bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-500'>
                    Jl. Pondok Kelapa Selatan No. 29 RT.009/RW.05<p>Pondok Kelapa, Kec. Duren Sawit, Jakarta Timur 13450</p>
                </p>
            </div>

            <iframe className='object-center mt-2 mb-7 mx-auto' title='Maps' src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15864.323865878598!2d106.9348696!3d-6.2530626!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc588a3f42051a738!2sMusholla%20Baitul%20Muslimin!5e0!3m2!1sid!2sid!4v1640892514883!5m2!1sid!2sid' width='360' height='360' allowFullScreen='' loading='lazy'></iframe>

            <div className='text-md text-center mt-3 mb-7 font-normal text-brown-250 leading-relaxed'>
                Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan<p>do'a restu kepada putra putri kami</p>
            </div>

            <div className=''>
                <svg className="w-6 h-6 object-center mx-auto mt-3 mb-7" fill="red" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </div>

            <div className='mb-8'>               
                <p className='bg-clip-text text-md mb-3 font-medium text-transparent bg-gradient-to-r from-white to-violet-400'>Kami yang berbahagia</p>

                <p className='bg-clip-text text-md font-bold text-transparent bg-gradient-to-r from-pink-700 to-white'>Kel. Bpk Pudji Harjono - Ibu Sugiyem
                    <p>&</p><p>Bpk H. Hafid - Ibu Rasmini</p>
                </p>
            </div>
        </div>

        

    )
}

export default Event
