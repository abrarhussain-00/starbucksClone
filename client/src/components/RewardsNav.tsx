import React from 'react'
import {Link} from 'react-router-dom'
const RewardsNav = () => {
    return (
        <nav className='bg-[#1e3932] w-full h-[50px] '>
            <div className='flex justify-between items-center w-full h-full'>
                <h6 className='text-uppercase font-bold text-white text-[14px] p-4 text-transform uppercase lg:p-[99px] sm:p-4'>Starbucks® Rewards</h6>
                {/* Need to add a link for button */}
                <button className='font-light text-white rounded-[50px] mr-4 lg:hidden xl:hidden'style={{ padding: '7px 16px', border: '1px solid white' }}><Link to="">Join in the app</Link></button>
            </div>
        </nav>
    )
}

export default RewardsNav;
