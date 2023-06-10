import React from 'react'

const ThreeHundred = () => {
    return (
        <div className='md:flex md:items-center md:justify-center'>
            <img src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/300.png" alt="cofee" className='sm:w-[300px] md:w-[350px]' />
            <div className='md:flex md:justify-start md:text-start md:flex-col sm:w-full md:items-start md:w-[30%] md:flex-wrap'>
                <h3 className='text-[24px] font-800 '>Sandwich, protein box or at-</h3>
                <h3 className='text-[24px] font-800'>cofee</h3>
                <p className='p-4 md:p-0 md:mt-3 font-600 md:text-start'>Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®</p>
            </div>
        </div>
    )
}

export default ThreeHundred
