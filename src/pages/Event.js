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
                    Rabu, 02 Februari 2022
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
                    Four Seasons Resort Maldives
                </p>
                <p className='text-sm font-normal mt-4 mb-0 italic bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-500'>
                    Landaa Giraavaru, Baa Atoll, Maldives
                </p>
            </div>

            <iframe className='object-center mt-2 mb-7 mx-auto' title='Maps' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.848883621589!2d73.11011231476478!3d5.286263796164946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b4ab4b3175510bf%3A0x101dca2903ab1f9!2sFour%20Seasons%20Resort%20Maldives%20at%20Landaa%20Giraavaru!5e0!3m2!1sen!2sid!4v1664433627611!5m2!1sen!2sid' width='360' height='360' allowFullScreen='' loading='lazy'></iframe>

            <div className='text-md text-center mt-3 mb-7 font-normal text-brown-250 leading-relaxed'>
                Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a restu kepada putra putri kami
            </div>

            <div className=''>
                <svg className='w-6 h-6 object-center mx-auto mt-3 mb-7' fill="red" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="more-horizotnal"><rect width="24" height="24" opacity="0"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><circle cx="5" cy="12" r="2"/></g></g></svg>
            </div>

            <div className='text-md text-center mt-3 mb-7 font-normal leading-relaxed bg-clip-text text-transparent bg-gradient-to-r from-stone-200 to-yellow-100 '>
                <span>Tanpa mengurangi rasa hormat dikarenakan situasi yang sedang terjadi di tengah pandemi Covid-19, diharapkan kepada Bapak/Ibu/Saudara/i untuk bisa :</span>
                <p className='flex space-x-4 justify-center mx-auto text-yellow-100'>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="head-side-mask" class="svg-inline--fas fa-hands-wash w-9 h-9 mt-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M.15,184.42C-2.17,244.21,23,298.06,64,334.88V512H224V316.51L3.67,156.25A182.28,182.28,0,0,0,.15,184.42ZM509.22,275c-21-47.12-48.5-151.75-73.12-186.75A208.11,208.11,0,0,0,266.11,0H200C117,0,42.48,50.57,13.25,123.65L239.21,288H511.76A31.35,31.35,0,0,0,509.22,275ZM320,224a32,32,0,1,1,32-32A32.07,32.07,0,0,1,320,224Zm16,144H496l16-48H256V512H401.88a64,64,0,0,0,60.71-43.76L464,464H336a16,16,0,0,1,0-32H474.67l10.67-32H336a16,16,0,0,1,0-32Z"></path></svg>

                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="hands-wash" className="svg-inline--fas fa-hands-wash w-10 h-10 mt-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M496,224a48,48,0,1,0-48-48A48,48,0,0,0,496,224ZM311.47,178.45A56.77,56.77,0,0,1,328,176a56,56,0,0,1,19,3.49l15.35-48.61A24,24,0,0,0,342,99.74c-11.53-1.35-22.21,6.44-25.71,17.51l-20.9,66.17ZM93.65,386.33c.8-.19,1.54-.54,2.35-.71V359.93a156,156,0,0,1,107.06-148l73.7-22.76L310.92,81.05a24,24,0,0,0-20.33-31.11c-11.53-1.34-22.22,6.45-25.72,17.52L231.42,173.88a8,8,0,0,1-15.26-4.83L259.53,31.26A24,24,0,0,0,239.2.15C227.67-1.19,217,6.6,213.49,17.66L165.56,169.37a8,8,0,1,1-15.26-4.82l38.56-122a24,24,0,0,0-20.33-31.11C157,10,146.32,17.83,142.82,28.9l-60,189.85L80.76,168.7A24,24,0,0,0,56.9,144.55c-13.23-.05-24.72,10.54-24.9,23.86V281.14A123.69,123.69,0,0,0,93.65,386.33ZM519.1,336H360a8,8,0,0,1,0-16H488a24,24,0,0,0,23.54-28.76C509.35,279.84,498.71,272,487.1,272H288l47.09-17.06a24,24,0,0,0-14.18-45.88L213.19,242.31A123.88,123.88,0,0,0,128,360v25.65a79.78,79.78,0,0,1,58,108.63A118.9,118.9,0,0,0,248,512H456a24,24,0,0,0,23.54-28.76C477.35,471.84,466.71,464,455.1,464H360a8,8,0,0,1,0-16H488a24,24,0,0,0,23.54-28.76C509.35,407.84,498.71,400,487.1,400H360a8,8,0,0,1,0-16H520a24,24,0,0,0,23.54-28.76C541.35,343.84,530.71,336,519.1,336ZM416,64a32,32,0,1,0-32-32A32,32,0,0,0,416,64ZM112,416a48,48,0,1,0,48,48A48,48,0,0,0,112,416Z"></path></svg>

                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="people-arrows" class="svg-inline--fa fa-people-arrows fa-w-18 w-10 h-10 mt-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M96,128A64,64,0,1,0,32,64,64,64,0,0,0,96,128Zm0,176.08a44.11,44.11,0,0,1,13.64-32L181.77,204c1.65-1.55,3.77-2.31,5.61-3.57A63.91,63.91,0,0,0,128,160H64A64,64,0,0,0,0,224v96a32,32,0,0,0,32,32V480a32,32,0,0,0,32,32h64a32,32,0,0,0,32-32V383.61l-50.36-47.53A44.08,44.08,0,0,1,96,304.08ZM480,128a64,64,0,1,0-64-64A64,64,0,0,0,480,128Zm32,32H448a63.91,63.91,0,0,0-59.38,40.42c1.84,1.27,4,2,5.62,3.59l72.12,68.06a44.37,44.37,0,0,1,0,64L416,383.62V480a32,32,0,0,0,32,32h64a32,32,0,0,0,32-32V352a32,32,0,0,0,32-32V224A64,64,0,0,0,512,160ZM444.4,295.34l-72.12-68.06A12,12,0,0,0,352,236v36H224V236a12,12,0,0,0-20.28-8.73L131.6,295.34a12.4,12.4,0,0,0,0,17.47l72.12,68.07A12,12,0,0,0,224,372.14V336H352v36.14a12,12,0,0,0,20.28,8.74l72.12-68.07A12.4,12.4,0,0,0,444.4,295.34Z"></path></svg>

                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="handshake-slash" class="svg-inline--fa fa-handshake-slash fa-w-20 w-10 h-10 mt-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M0,128.21V384H64a32,32,0,0,0,32-32V184L23.83,128.21ZM48,320.1a16,16,0,1,1-16,16A16,16,0,0,1,48,320.1Zm80,31.81h18.3l90.5,81.89a64,64,0,0,0,90-9.3l.2-.2,17.91,15.5a37.16,37.16,0,0,0,52.29-5.39l8.8-10.82L128,208.72Zm416-223.7V352.1a32,32,0,0,0,32,32h64V128.21ZM592,352.1a16,16,0,1,1,16-16A16,16,0,0,1,592,352.1ZM303.33,202.67l59.58-54.57a16,16,0,0,1,21.59,23.61L358.41,195.6,504,313.8a73.08,73.08,0,0,1,7.91,7.7V128L457.3,73.41A31.76,31.76,0,0,0,434.7,64H348.8a31.93,31.93,0,0,0-21.6,8.41l-88.07,80.64-25.64-19.81L289.09,64H205.3a32,32,0,0,0-22.6,9.41L162.36,93.72,45.47,3.38A16,16,0,0,0,23,6.19L3.38,31.46A16,16,0,0,0,6.19,53.91L594.53,508.63A16,16,0,0,0,617,505.82l19.65-25.27a16,16,0,0,0-2.82-22.45Z"></path></svg>
                </p>
            </div>


            <div className=''>
                <svg className="w-6 h-6 object-center mx-auto mt-3 mb-7" fill="red" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </div>

            <div className='mb-8'>               
                <p className='bg-clip-text text-md mb-3 font-medium text-transparent bg-gradient-to-r from-white to-violet-400'>Kami yang berbahagia</p>

                <p className='bg-clip-text text-md font-bold text-transparent bg-gradient-to-r from-pink-700 to-white'>Kel. Bpk Akira - Ibu Myoi
                    <p>&</p><p>Bpk Bbang - Ibu Jessica</p>
                </p>
            </div>
        </div>

        

    )
}

export default Event
