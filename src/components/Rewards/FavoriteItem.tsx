import { useState } from 'react'
import TwentyFive from './TwentyFive';
import Hundred from './Hundred';
import TwoHundred from './TwoHundred';
import ThreeHundred from './ThreeHundred';
import FourHundred from './FourHundred';
import React from 'react';
const FavoriteItem = () => {
    const [showFavorites, setShowFavorites] = React.useState('twentyfive');

    const handleFavorites = (options: string) => {
        if (showFavorites === options) {
            setShowFavorites(''); 
        } else {
            setShowFavorites(options); 
        }
    };
    return (
        <div className='py-5'>
            <div className=' w-full' style={{backgroundColor: 'hsla(160 32% 87%)'}}>
                <h2 className='font-soDo font-semibold text-[28px] py-10'>Get your favorites for free</h2>
                <div className='flex justify-center items-center'>
                    <button
                        onClick={() => handleFavorites('twentyfive')}
                        className='p-5 px-5 pb-5 mr-1 sm:p-8 sm:px-8 sm:pb-6 sm:mr-2'>
                        <span className='text-[24px] font-SoDoSans font-600'>25</span>
                        <span className='text-[#cba258] font-[16px]'>★</span>
                    </button>
                    <button
                        onClick={() => handleFavorites('hundred')}
                        className='p-5 px-5 pb-5 mr-1 sm:p-8 sm:px-8 sm:pb-6 sm:mr-2'>
                        <span className='text-[24px] font-SoDoSans font-600'>100</span>
                        <span className='text-[#cba258] font-[16px]'>★</span></button>
                    <button 
                        onClick={() => handleFavorites('twohundred')}
                        className='p-5 px-5 pb-5 mr-1 sm:p-8 sm:px-8 sm:pb-6 sm:mr-2'>
                        <span className='text-[24px] font-SoDoSans font-600'>200</span>
                        <span className='text-[#cba258] font-[16px]'>★</span>
                    </button>
                    <button 
                        onClick={() => handleFavorites('threehundred')}
                        className='p-5 px-5 pb-5 mr-1 sm:p-8 sm:px-8 sm:pb-6 sm:mr-2'>
                        <span className='text-[24px] font-SoDoSans font-600'>300</span>
                        <span className='text-[#cba258] font-[16px]'>★</span></button>
                    <button 
                        onClick={() => handleFavorites('fourhundred')}
                        className='p-5 px-5 pb-5 mr-1 sm:p-8 sm:px-8 sm:pb-6 sm:mr-2'>
                        <span className='text-[24px] font-SoDoSans font-600'>400</span>
                        <span className='text-[#cba258] font-[16px]'>★</span>
                    </button>
                </div>
            </div>
            <div className='bg-secondary-green py-10'>
                {showFavorites === 'twentyfive' && <TwentyFive />}
                {showFavorites === 'hundred' && <Hundred />}
                {showFavorites === 'twohundred' && <TwoHundred />}
                {showFavorites === 'threehundred' && <ThreeHundred />}
                {showFavorites === 'fourhundred' && <FourHundred />}
            </div>
        </div>
    )
}

export default FavoriteItem
