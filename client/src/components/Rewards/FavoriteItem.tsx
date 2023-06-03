import { useState } from 'react'
import twentyFive from './TwentyFive'
import TwentyFive from './TwentyFive'
const FavoriteItem = () => {
    // const [showFavorites, setShowFavorites] = useState(null);

    // const handleFavorites = () => {
    //     setShowFavorites
    // }
    return (
        <div className='py-5'>
            <div className='bg-secondary-green w-full'>
                <h2 className='font-soDo font-semibold text-[28px] py-10'>Get your favorites for free</h2>
                <div className='flex justify-center items-center'>
                    <button className='p-5 px-5 pb-5 mr-1 sm:p-8 sm:px-8 sm:pb-6 sm:mr-2'><span className='text-[24px] font-SoDoSans font-600'>25</span><span className='text-[#cba258] font-[16px]'>★</span></button>
                    <button className='p-5 px-5 pb-5 mr-1 sm:p-8 sm:px-8 sm:pb-6 sm:mr-2'><span className='text-[24px] font-SoDoSans font-600'>100</span><span className='text-[#cba258] font-[16px]'>★</span></button>
                    <button className='p-5 px-5 pb-5 mr-1 sm:p-8 sm:px-8 sm:pb-6 sm:mr-2'><span className='text-[24px] font-SoDoSans font-600'>200</span><span className='text-[#cba258] font-[16px]'>★</span></button>
                    <button className='p-5 px-5 pb-5 mr-1 sm:p-8 sm:px-8 sm:pb-6 sm:mr-2'><span className='text-[24px] font-SoDoSans font-600'>300</span><span className='text-[#cba258] font-[16px]'>★</span></button>
                    <button className='p-5 px-5 pb-5 mr-1 sm:p-8 sm:px-8 sm:pb-6 sm:mr-2'><span className='text-[24px] font-SoDoSans font-600'>400</span><span className='text-[#cba258] font-[16px]'>★</span></button>
                </div>
            </div>
            <div className='bg-'>
                <TwentyFive />
            </div>
        </div>
    )
}

export default FavoriteItem
