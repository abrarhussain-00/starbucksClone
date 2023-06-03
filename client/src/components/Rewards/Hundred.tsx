import React from 'react'

const Hundred = () => {
    return (
        <div className='md:flex md:items-center md:justify-center'>
            <img src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/100.png" alt="cofee" className='sm:w-[300px] md:w-[350px]' />
            <div className='md:flex md:justify-start md:text-start md:flex-col sm:w-full md:items-start md:w-[30%] md:flex-wrap'>
                <h3 className='text-[24px] font-800 '>Brewed hot or iced coffe or tea, bakery, item, packaged snack and more</h3>
                <p className='p-4 md:p-0 md:mt-3 font-600 md:text-start'>Treat yourself to an iced coffe, buttery croissant, bag of chips and more.</p>
            </div>
        </div>
    )
}

export default Hundred
