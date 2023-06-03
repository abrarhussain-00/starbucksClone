import React from 'react'
import { Link } from 'react-router-dom'
const CashorCard = () => {
    return (
        <div className='py-5 bg-[#f2f0eb] w-full'>
            <div className='w-full mx-auto'>
                <h2 className='font-soDo font-semibold text-[28px] py-5'>Cash or card, you earn Stars</h2>
                <p className='font-main'>No matter how you pay, you can earn Stars with your morning coffee.</p>
                <p className='font-main'>Those Stars add up to (really delicious) Rewards.</p>
                <div className='flex flex-col md:flex-row md:px-12'>
                    <div className='flex-col text-start -space-y-10 pl-3 md:-space-y-3 md:w-1/2'>
                        <h2 className='font-soDo font-semibold text-[19px] py-10 md:text-[28px] md:py-5'>1 per dollar</h2>
                        <p>Pay as you go</p>
                    </div>
                    <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png" alt="scan and pay" width={112} />
                    <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png" alt="scan and pay" width={112} />
                </div>
            </div>
        </div>
    )
}

export default CashorCard
