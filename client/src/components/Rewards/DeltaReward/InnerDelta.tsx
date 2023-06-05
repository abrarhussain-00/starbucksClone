import React from 'react'
import Delta from '../../../assets/rewardsImg/delta.png'
const InnerDelta = () => {
    return (
        <div className='flex justify-center items-center bg-main-color absolute left-0 right-0 top-0 bottom-0  lg:w-[95%] lg:h-[500px] lg:absolute lg:left-10 lg:right-10 lg:top-12 lg:-bottom-0 z-50 '>
            <div className='w-full md:w-[50%] lg:w-[40%]'>
                <h2 className='font-semibold font-main text-[28px] py-5'>Keep the Rewards Coming</h2>
                <p className='text-[16px]'>The Rewards don't stop at your morning coffee. Join Starbucks® Rewards and unlock perks from our partners, all while earning more Stars.</p>
                <div className='flex flex-col justify-center items-center py-5'>
                    <img src={Delta} width={195} />
                    <div className='py-3'>
                        <p className='text-[16px]'><a href='' className='text-green-color border-b border-green-color'>Link your Delta Skymiles</a> and Starbucks® Rewards accounts to earn 1 mile per $1* spent at Starbucks and double Stars on Delta travel days.</p>
                        <button className='rounded-lg bg-green-color text-white py-2 px-4 mt-5'>
                            Join Starbucks Rewards
                        </button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default InnerDelta
