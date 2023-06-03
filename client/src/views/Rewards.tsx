import { useEffect, useState } from 'react'
import RewardsNav from '../components/Rewards/RewardsNav'
import RewardsMain from '../components/Rewards/RewardsMain'
import FavoriteItem from '../components/Rewards/FavoriteItem'
import GettingStarted from '../components/Rewards/GettingStarted'
import RewardExtras from '../components/Rewards/RewardsExtras'
import CashorCard from '../components/Rewards/CashorCard'
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
      <GettingStarted />
      <FavoriteItem />
      <RewardExtras />
      <CashorCard />
    </div>
  )
}

export default Rewards