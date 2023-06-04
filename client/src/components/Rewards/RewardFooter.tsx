import React from 'react'

const RewardFooter = () => {
    return (
        <div className='w-full h-full  bg-[#f9f9f9] mb-14'>
            <div className='pb-[2rem] pt-[2rem] pl-[3rem]'>
                <p className='text-left text-[14px] pb-3'>At participating stores. Restrictions apply.</p>
                <p className='text-left text-[14px] pb-2'>* Excludes taxes and gratitudes. At participatings stores. Some restrictions apply. Flights purchased close to departure may not earn double stars.</p>
                <p className='text-left text-[14px]'>Stars and miles may not be earned on purchases of alcohol, Starbucks Cards and Starbucks Card reloads.</p>
                <div className='lg:flex lg:justify-between lg:space-x-20 w-[90%]'>
                    <div className='flex flex-col justify-start items-start mt-5 w-full lg:w-[50%]'>
                        <h4 className='text-gray-500 font-semibold text-[16px] font-main'>EARNING STARS</h4>
                        <p className='text-left text-[14px] pt-5'>Stars cannot be earned on purchase of alcohol, Stabucks Cards or Strabuck Card reloads.</p>
                        <p className='text-left text-[14px] pt-5'>Earn 1 Star per $1 spent when you scan your member barcode in the app, then pay with cash, credit/debit cards or mobile wallets at participating stores. You can also earn 1 Star per $1 spent when you link a payment method and pay directly through the app.</p>
                        <p className='text-left text-[14px] pt-5'>Earn 2 Stars per $1 spent when you load funds and pay with your digital Starbucks Card in the app. You can also earn 2 Stars per $1 spent when you pay in-person at a participating store with your registered physical Starbucks Card or scan your member barcode in the app, and then use any physical Starbucks Card (regardless of whether it is registered) to complete the purchase.</p>
                        <h4 className='pt-7 text-gray-500 font-semibold text-[16px] font-main'>BENEFITS</h4>
                        <p className='text-left text-[14px] pt-5'>Free refills available during same in-store visit only. To qualify for the Birthday Reward, you must have made at least one Star-earning transaction.</p>
                    </div>
                    <div className='flex flex-col justify-start items-start mt-5  w-full lg:w-[50%]'>
                        <h4 className='text-gray-500 font-semibold text-[16px] font-main'>TERMS OF USE</h4>
                        <p className='text-left text-[14px] pt-5'>For full program details visit <a href="#" className='text-green-color border-b border-green-color'>starbuck.com/rewards/terms</a>.</p>
                        <p className='text-left text-[14px] pt-5'>Earn 1 Star per $1 when digitally loading your Starbucks Card with your Starbucks® Rewards Visa® Card: See your Card Rewards Program Agreement for more details.</p>
                        <p className='text-left text-[14px] pt-5'>Starbucks® Rewards benefits are available at participating Starbucks stores. Not all stores have the ability to honor Rewards at this time. Visit the <a href="#" className='text-green-color border-b border-green-color'>Starbucks Store Locator</a>
                            Starbucks Store Locator
                            opens in new window and search for locations honoring “Redeem Rewards”.</p>
                        <p className='text-left text-[14px] pt-5'>Deposit and credit card products provided by JPMorgan Chase Bank, N.A. Member FDIC</p>
                        <h4 className='pt-7 text-gray-500 font-semibold text-[16px] font-main'>REDEEMING REWARDS</h4>
                        <p className='text-left text-[14px] pt-5'>Rewards cannot be redeemed for alcoholic beverages or multi-serve items. You pay the difference for any beverage customization over $1 and/or merchandise item over $20. Not all stores honor tiered Rewards. Select stores redeem 200 Stars for free food or drink items only.

                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RewardFooter
