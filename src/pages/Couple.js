import React from 'react'
import Avatar from 'avataaars'

function Couple() {
    return (
        <div className='min-h-screen py-16 px-3'> 

            <div className='text-md font-normal text-center'>
                <span className='bg-clip-text mt-2 font-bold text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                    بِسمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
                </span>

                <p className='bg-clip-text mt-4 font-medium text-transparent bg-gradient-to-r from-violet-500 to-white'>
                    Assalamu'alaikum wr.wb
                </p>
            </div>

            <div className='text-md text-center mt-3 mb-0 font-normal break-words text-brown-250 leading-relaxed'>
                Dengan memohon rahmat dan ridho Allah SWT,<p>kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri</p><p>resepsi pernikahan putra putri kami</p>
            </div>

            <div className='flex flex-auto justify-center w-36 mx-auto inset-1'>
                <Avatar
                    avatarStyle='Circle'
                    topType='Hijab'
                    accessoriesType='Round'
                    hatColor='Red'
                    clotheType='BlazerShirt'
                    eyeType='Happy'
                    eyebrowType='Default' 
                    mouthType='Default'
                    skinColor='Light'
                />
            </div>
                
            <div className='text-xl font-extrabold text-center'>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                    Ria Rosyida
                    <p className='bg-clip-text text-md-24 mt-1 font-bold italic text-transparent bg-gradient-to-r from-brown-200 to-pink-400'>  (Ida)
                    </p>
                </span>
                <p className='text-sm mt-2 font-normal italic bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-500'>
                    Putri dari Bapak Pudji Harjono & Ibu Sugiyem
                </p>
            </div>

            <div className='text-2xl font-extrabold text-center mt-9'>
                <span className='bg-clip-text italic text-transparent bg-gradient-to-r from-white to-violet-500'>
                   &
                </span>
            </div>
                
            <div className='flex flex-auto justify-center w-36 mx-auto'>
                <Avatar
                    avatarStyle='Circle'
                    topType='ShortHairShortCurly'
                    accessoriesType='Blank'
                    hairColor='BrownDark'
                    facialHairType='Blank'
                    clotheType='BlazerSweater'
                    eyeType='Default'
                    eyebrowType='Default'
                    mouthType='Default'
                    skinColor='Light'
                />
            </div>
            <div className='text-xl font-extrabold text-center'>
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                    Rifki Rahafian
                    <p className='bg-clip-text text-md-24 mt-1 font-semibold italic text-transparent bg-gradient-to-r from-brown-200 to-pink-400'>  (Oki)</p>
                </span>
                <p></p>
                <p className='text-sm font-normal mt-2 mb-0 
                italic bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-500'>
                    Putra dari Bapak H. Hafid & Ibu Rasmini
                </p>
            </div>
        </div>
    )
}

export default Couple
