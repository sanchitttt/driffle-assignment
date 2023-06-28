import React from 'react'
import { CartIcon, GlobeIcon, LikeIcon, Logo, ProfileIcon } from './icons'

function Navbar() {
    return (
        <nav className='z-[1500] relative flex justify-between desktop:px-[30px] mobile:px-[15px] items-center bg-lightBlack h-[73px]'>
            <Logo />
            <div className='flex desktop:gap-[20px] mobile:gap-[0px]'>
                <div className='flex gap-[15px] mr-[15px] mobile:hidden desktop:flex'>
                    <GlobeIcon />
                    <div className='flex items-center justify-between gap-[7.5px]'>
                        <div className='text-[#fff] text-[14px] font-bold'>India (English) </div>
                        <div className='w-[3px] h-[3px] bg-[#fff] rounded-full' />
                        <div className='text-[#fff] text-[14px] font-bold'>INR</div>
                    </div>
                </div>
                <div className='mobile:hidden desktop:flex relative flex items-center justify-center w-[48px] h-[48px] rounded-[10px] transition hover:bg-[#ffffff26]'>
                    <LikeIcon />
                </div>
                <div className='relative flex items-center justify-center w-[48px] h-[48px] rounded-[10px] transition hover:bg-[#ffffff26]'>
                    <CartIcon />
                    <div className='absolute mobile:right-[-2px] mobile:top-[6px] w-[16px] h-[16px] rounded-full bg-[#416AFF] flex items-center justify-center text-[12px] text-[#fff] font-bold leading-[12px]'
                    >
                        2
                    </div>
                </div>
                <div className='relative flex items-center justify-center w-[48px] h-[48px] rounded-[10px] transition hover:bg-[#ffffff26]'>
                    <ProfileIcon />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
