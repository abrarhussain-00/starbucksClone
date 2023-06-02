import { useEffect, useState } from 'react'
import RewardsNav from '../components/RewardsNav'
import RewardsMain from '../components/RewardsMain'
const Rewards = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleSmallScreens = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };
    // Checking to the size 
    handleSmallScreens()
    // Listen for resize
    window.addEventListener('resize', handleSmallScreens);
    return () => {
      // When component unmounts remove it
      window.removeEventListener('resize', handleSmallScreens);
    };

  }, [])
  return (
    <div>
      <RewardsNav />
      <RewardsMain />
      <div className='items-center justify-center py-[64px]'>
        <h5 className='font-main font-semibold text-[28px]'>Getting started is easy</h5>
        <p className='pt-3 font-main '>Earn Stars and get rewareded in a few steps.</p>
        <div className='flex flex-col justify-center items-center p-[48px] w-full sm:flex-wrap lg:flex-row lg:flex-nowrap'>
          <div className='flex flex-col justify-center items-center mx-[5vw] lg:items-center lg:justify-center'>
            <div className='flex justify-center items-center'>
              <img src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg" alt="" width={48} />
            </div>
            <div>
              <h3 className='font-main font-semibold pt-2 mt-2 text-[19px]'>Create an account</h3>
              <p className='mt-2'>To get started, <a href="/account/create" className='text-green-color border-b border-green-color'>join now.</a> You can also <a href="" className='text-green-color border-b border-green-color'>join in the app</a> to get access to the full range of Starbucks® Rewards benefits.</p>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center mx-[5vw] mt-4 lg:items-center lg:justify-center'>
            <div className='flex justify-center items-center'>
              <img src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-2@2x.jpg" alt="" width={48} />
            </div>
            <div>
              <h3 className='font-main font-semibold pt-2 mt-2 text-[19px]'>Order and pay how you'd like</h3>
              <p className='mt-2'>Use cash, credit/debit card, or save some time and pay right through the app. You'll collect Stars all ways. <a href='#' className='text-green-color border-b border-green-color'>Learn how</a></p>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center mx-[5vw] mt-4 lg:items-center lg:justify-center'>
            <div className='flex justify-center items-center'>
              <img src="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-3@2x.jpg" alt="" width={48} />
            </div>
            <div>
              <h3 className='font-main font-semibold pt-2 mt-2 text-[19px]'>Earn Stars, get Rewards</h3>
              <p className='mt-2'>As you earn Stars, you can redeem them for Rewards - like free food, drinks, and more. Start redeeming with as little as 25 Stars!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rewards