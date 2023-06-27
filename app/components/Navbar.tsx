import React from 'react'
import { CartIcon, GlobeIcon, LikeIcon, Logo, ProfileIcon } from './icons'

function Navbar() {
    return (
        <nav className='z-[1500] relative flex justify-between desktop:px-[30px] mobile:px-[15px] items-center bg-lightBlack h-[73px]'>
            <Logo />
            <div className='flex desktop:gap-[45px] mobile:gap-[25px]'>
                <div className='flex gap-[15px] mr-[15px] mobile:hidden desktop:flex'>
                    <GlobeIcon />
                    <div className='flex items-center justify-between gap-[7.5px]'>
                        <div className='text-[#fff] text-[14px] font-bold'>India (English) </div>
                        <div className='w-[3px] h-[3px] bg-[#fff] rounded-full' />
                        <div className='text-[#fff] text-[14px] font-bold'>INR</div>
                    </div>
                </div>
                <div className='mobile:hidden desktop:flex'>
                    <LikeIcon />
                </div>
                <CartIcon />
                <ProfileIcon />
            </div>
        </nav>
    )
}

export default Navbar