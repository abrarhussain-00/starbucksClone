import React from 'react'

const TwentyFive = () => {
    return (
        <div className='md:flex md:items-center md:justify-center '>
            <img src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png" alt="cofee" className='sm:w-[350px] md:w-[350px]'/>
            <div className='md:flex md:justify-start md:flex-col sm:w-full md:items-start md:w-[30%] md:flex-wrap'>
                <h3 className='text-[24px] font-800'>Customize your drink</h3>
                <p className='p-4 md:p-0 md:mt-3 font-600 md:text-start'>Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.</p>
            </div>
        </div>
    )
}

export default TwentyFive
