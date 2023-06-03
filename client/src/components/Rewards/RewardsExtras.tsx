import React from 'react'
import { Link } from 'react-router-dom'

const RewardExtras = () => {
    return (
        <div className='items-center justify-center py-[64px]'>
            <h5 className='font-main font-semibold text-[28px]'>Endless Extras</h5>
            <p className='pt-3 font-main'>Joining Starbucks® Rewards means unlocking access to exclusive</p>
            <p className='font-main'>benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.</p>
            <div className='flex flex-col justify-center items-center p-[48px] w-full sm:flex-wrap lg:flex-row lg:flex-nowrap'>
                <div className='flex flex-col justify-center items-center mx-[5vw] mt-4 lg:items-center lg:justify-center'>
                    <div className='flex justify-center items-center'>
                        <img src="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg" alt="fun foodie" width={112} />
                    </div>
                    <div>
                        <h3 className='font-main font-semibold pt-2 mt-2 text-[19px]'>Fun freebies</h3>
                        <p className='mt-2'>Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.</p>
                        <Link to='#' className='text-green-color border-b border-green-color'>Learn more</Link>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center mx-[5vw] mt-4 lg:items-center lg:justify-center'>
                    <div className='flex justify-center items-center'>
                        <img src="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg" alt="order & pay" width={112} />
                    </div>
                    <div>
                        <h3 className='font-main font-semibold pt-2 mt-2 text-[19px]'>Order & pay ahead</h3>
                        <p className='mt-2'>Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.</p>
                        <Link to='#' className='text-green-color border-b border-green-color'>Learn more</Link>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center mx-[5vw] mt-4 lg:items-center lg:justify-center'>
                    <div className='flex justify-center items-center'>
                        <img src="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg" alt="Get to free faster" width={112} />
                    </div>
                    <div>
                        <h3 className='font-main font-semibold pt-2 mt-2 text-[19px]'>Get to free faster</h3>
                        <p className='mt-2'>Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.</p>
                        <Link to="#" className='text-green-color border-b border-green-color'>Learn more</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RewardExtras
