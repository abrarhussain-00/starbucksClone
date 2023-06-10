import React from 'react'

const TwoHundred = () => {
    return (
        <div className='md:flex md:items-center md:justify-center'>
            <img src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png" alt="cofee" className='sm:w-[300px] md:w-[350px]' />
            <div className='md:flex md:justify-start md:text-start md:flex-col sm:w-full md:items-start md:w-[30%] md:flex-wrap'>
                <h3 className='text-[24px] font-800 '>Handedcrafted drink (Cold</h3>
                <h3 className='text-[24px] font-800 '>Brew, latted and more) or hot breakfast</h3>
                <p className='p-4 md:p-0 md:mt-3 font-600 md:text-start'>Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.</p>
            </div>
        </div>
    )
}

export default TwoHundred
