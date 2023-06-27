import Image from 'next/image'
import React from 'react'

function About() {
    return (
        <>
            <main className='w-[100vw] h-[94.4vh] bg-[#0c0c0c] flex-col flex justify-start items-center desktop:flex mobile:hidden'>
                <div className='w-[944px] mt-[-0px] h-[944px] relative flex items-center justify-center '>
                    <div id='outer-circle'
                        className='absolute z-[1200] left-[50%] top-[50%] border-[2px] w-[944px] h-[944px] rounded-full border-dashed border-[#ffffff1a]'
                        style={{ transform: 'translate(-50%,-50%)' }}
                    >
                        <Image
                            className='center minecraft'
                            src='/minecraft.svg'
                            width={40}
                            height={40}
                            alt='minecraft image'
                        />
                        <Image
                            className='center mortalKombat'
                            src='/mortalKombat.png'
                            width={40}
                            height={40}
                            alt='mortalKombat image'
                        />
                        <Image
                            className='center football'
                            src='/mbappe.svg'
                            width={40}
                            height={40}
                            alt='football image'
                        />
                    </div>
                    <div id='mid-circle'
                        className='absolute z-[1200] left-[50%] top-[50%] border-[2px] w-[686px] h-[686px] rounded-full border-dashed border-[#ffffff1a]'
                        style={{ transform: 'translate(-50%,-50%)' }}
                    >
                        <div className='bg-[#FBFF35] centerBottom batman w-[40px] h-[40px] rounded-[10px] flex items-center justify-center'>
                            <Image
                                className=''
                                src='/batman.png'
                                width={38}
                                height={22}
                                alt='batman image'
                            />
                        </div>
                    </div>
                    <div id='inner-circle'
                        className='absolute  z-[1300] left-[50%] top-[50%] border-[2px] w-[464px] h-[464px] rounded-full border-dashed border-[#ffffff1a]'
                        style={{ transform: 'translate(-50%,-50%)' }}
                    >
                        <Image
                            className='center xbox'
                            src='/xbox.svg'
                            width={38}
                            height={22}
                            alt='xbox image'
                        />
                        <Image
                            className='center gta'
                            src='/gta.png'
                            width={38}
                            height={22}
                            alt='gta image'
                        />
                    </div>
                    <div id='text-container'
                        className='absolute z-[1100] top-[50%] left-[50%] flex flex-col items-center justify-center w-[100%] gap-[50px]'
                        style={{ transform: 'translate(-50%,-50%)' }}
                    >
                        <div className='text-white leading-[68px] text-[64px] text-center font-bold text-main'>
                            Driffle is a <span className='text-[#5DF5B5]'>one-stop shop</span><br /> for all your gaming needs.
                        </div>
                        <div className='max-w-[815px] text-[#9F9F9F] text-center text-[16px] leading-[22px] '>
                            {"Not only do we sell games, but also offer gift cards, DLC's, and more. Driffle is a marketplace, so you can find a wide variety of items from different sellers in one place. We are committed to the future of gaming and strive to make our platform safe, affordable, and sustainable for all users. Whether you're looking for the latest releases            or hard-to-find classics, you're sure to find what you're looking for on Driffle."}
                        </div>
                        <button aria-describedby='button' className='bg-[#4444444D] rounded-full w-[178px] h-[48px] flex items-center justify-center text-white border-[1px] border-[#CBCBCB]'
                        >
                            Visit our store
                        </button>
                    </div>
                </div>
                <div className='absolute top-[30%] left-[50%] bg-mainBlueCircle w-[944px] h-[568px] blur-[120px]'
                    style={{ transform: 'translate(-50%,-30%)' }}
                >

                </div>
            </main>
            <main className='w-[100vw] bg-[#0c0c0c] h-[94.4vh] flex flex-col items-center justify-center gap-[30px] mobile:flex desktop:hidden'>
                <div id='text-container'
                    className='flex flex-col items-center justify-center mx-[15px] gap-[30px]'
                >
                    <div className='text-white leading-[68px] text-[32px] text-center font-bold text-main'>
                        Driffle is a <span className='text-[#5DF5B5]'>one-stop shop</span> for all your gaming needs.
                    </div>
                    <div className='max-w-[815px] text-[#9F9F9F] text-center text-[16px] leading-[22px] '>
                        {"Not only do we sell games, but also offer gift cards, DLC's, and more. Driffle is a marketplace, so you can find a wide variety of items from different sellers in one place. We are committed to the future of gaming and strive to make our platform safe, affordable, and sustainable for all users. Whether you're looking for the latest releases            or hard-to-find classics, you're sure to find what you're looking for on Driffle."}
                    </div>
                    <button aria-describedby='button' className='bg-[#4444444D] rounded-full w-[178px] h-[48px] flex items-center justify-center text-white border-[1px] border-[#CBCBCB]'
                    >
                        Visit our store
                    </button>
                </div>
            </main>
        </>
    )
}

export default About
