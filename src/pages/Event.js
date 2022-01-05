import React from 'react'

function Event() {
    return (
        <div className='text-md text-center mt-7 mb-0 font-bold text-brown-250 leading-relaxed'>
            Yang insyaallah akan dilaksanakan pada :

            <div class="text-md font-bold text-center mt-3">
                <span class="bg-clip-text italic text-transparent bg-gradient-to-r from-white to-violet-500">
                    Minggu, 06 Februari 2022
                </span>
            </div>

            <div class="text-md font-extrabold text-center my-7">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    Akad & Resepsi Pernikahan :
                </span>
                <p></p>
                <p class="bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-500">
                    10:00 - selesai | 11:00 - 14:00 WIB
                </p>
            </div>

            <div className='text-md text-center mt-3 mb-0 font-bold text-brown-250'>
                    Bertempat di :
                <p class="bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-500">
                    Masjid Baitul Muslimin
                </p>
                <p class="text-sm font-normal mt-4 mb-0 italic bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-500">
                    Jl. Pondok Kelapa Selatan No. 29 RT.009/RW.05<p>Pondok Kelapa, Kec. Duren Sawit, Jakarta Timur 13450</p>
                </p>
            </div>

            <iframe className='object-center mt-2 mb-7 mx-auto' title="Maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15864.323865878598!2d106.9348696!3d-6.2530626!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc588a3f42051a738!2sMusholla%20Baitul%20Muslimin!5e0!3m2!1sid!2sid!4v1640892514883!5m2!1sid!2sid" width="360" height="360" allowfullscreen="" loading="lazy"></iframe>

        </div>

        

    )
}

export default Event
