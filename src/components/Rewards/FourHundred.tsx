import React from 'react'

const FourHundred = () => {
    return (
        <div className='md:flex md:items-center md:justify-center '>
            <img src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png" alt="cofee" className='sm:w-[350px] md:w-[350px]'/>
            <div className='md:flex md:justify-start md:flex-col sm:w-full md:items-start md:w-[30%] md:flex-wrap'>
                <h3 className='text-[24px] font-800'>Select Strabucks®</h3>
                <h3 className='text-[24px] font-800'>merchandise</h3>
                <p className='p-4 md:p-0 md:mt-3 font-600 md:text-start'>Take home a signature cup, drink tumbler or your choice of coffe merch up to $20.</p>
            </div>
        </div>
    )
}

export default FourHundred
