import React, { useState } from 'react';
import Star from '../assets/rewardsImg/star.png'
const RewardsMain = () => {
    return (
        <div className='bg-main-color w-full h-screen bg-cover bg-center sm:bg-bottom' style={{ backgroundImage: `url(${Star})` }}>
            <div className='lg:flex lg:justify-start lg:items-center sm:items-start sm:justify-center sm:m-0 sm:pt-3 h-full lg:ml-20'>
                <div className='lg:mx-4 lg:flex lg:flex-col lg:items-start sm:items-center sm:justify-center'>
                    <h1 className='text-black font-main text-[36px] lg:font-semibold sm:text-[1.5rem] sm:font-semibold'>FREE COFFEE</h1>
                    <h1 className='text-black font-main  text-[36px] lg:font-semibold sm:text-[1.6rem] sm:font-semibold'>IS A TAP AWAY</h1>
                    <p className='text-black font-main text-[19px] mt-3 sm:text-[1rem] sm:font-medium'>Join now to start earning Rewards.</p>
                    <div className='mt-10'>
                        <button className='font-main text-white rounded-[50px] bg-[#00754A]' style={{ padding: '7px 16px', lineHeight: '1.2;' }}><a href="">Join now</a></button>
                    </div>
                    <p className='text-black font-main text-[19px] mt-3'>
                        Or <a href="#" className='border-b-[1px] border-black'>join in the app</a> for the best experience
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RewardsMain
