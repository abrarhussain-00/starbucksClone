import React from 'react'
import { Link } from 'react-router-dom'
const CashorCard = () => {
    return (
        <div className='py-5 bg-[#f2f0eb] w-full'>
            <div className='w-full mx-auto'>
                <h2 className='font-soDo font-semibold text-[28px] py-5'>Cash or card, you earn Stars</h2>
                <p className='font-main'>No matter how you pay, you can earn Stars with your morning coffee.</p>
                <p className='font-main'>Those Stars add up to (really delicious) Rewards.</p>
                <div className='flex flex-col lg:flex-row lg:px-12 border-b-2'>
                    <div className='flex-col text-start md:flex-row -space-y-10 pl-3 sm:w-[20%] sm:flex-wrap lg:-space-y-3 '>
                        <h2 className='font-soDo font-semibold text-[19px] py-10 xl:text-[22px] lg:py-5'>1<span className='text-[15px]'>★</span> per dollar</h2>
                        <p>Pay as you go</p>
                    </div>
                    <div className='lg:flex p-[24px] md:flex'>
                        <div className='flex justify-start lg:flex lg:w-[50%] md:w-full '>
                            <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png" alt="scan and pay" width={112} />
                            <div className='text-start'>
                                <h2 className='text-[16px] font-semibold lg:text-[19px] pl-3'>Scan and pay separately</h2>
                                <p className='pl-3'>Use cash or credit/debit card at the register.</p>
                            </div>
                        </div>
                        <div className='flex justify-start lg:flex lg:w-[50%] md:ml-20'>
                            <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png" alt="scan and pay" width={112} />
                            <div className='text-start'>
                                <h2 className='text-[16px] font-semibold lg:text-[19px] pl-3'>Save payment in the app</h2>
                                <p className='pl-3'>Check-out faster by saving a credit/debit card or PayPal to your account. You'll be able to order ahead or scan and pay at the register in one step.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row lg:px-12'>
                    <div className='flex-col text-start md:flex-row -space-y-10 pl-3 sm:w-[20%] sm:flex-wrap lg:-space-y-3 '>
                        <h2 className='font-soDo font-semibold text-[19px] py-10 xl:text-[22px] lg:py-5'>2 <span className='text-[15px]'>★</span> per dollar</h2>
                        <p>Add funds in the app</p>
                    </div>
                    <div className='lg:flex p-[30px] md:flex'>
                        <div className='flex justify-start lg:flex lg:w-[50%] md:w-full '>
                            <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png" alt="scan and pay" width={112} />
                            <div className='text-start'>
                                <h2 className='text-[16px] font-semibold lg:text-[19px] pl-3'>Preload</h2>
                                <p className='pl-3'>To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</p>
                            </div>
                        </div>
                        <div className='flex justify-start lg:flex lg:w-[50%] md:ml-20'>
                            <img src="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png" alt="scan and pay" width={112} />
                            <div className='text-start'>
                                <h2 className='text-[16px] font-semibold lg:text-[19px] pl-3'>Register your gift card</h2>
                                <p className='pl-3'>Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CashorCard
