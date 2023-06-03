import { useEffect, useState } from 'react'
import RewardsNav from '../components/Rewards/RewardsNav'
import RewardsMain from '../components/Rewards/RewardsMain'
import FavoriteItem from '../components/Rewards/FavoriteItem'
import GettingStarted from '../components/Rewards/GettingStarted'
import RewardExtras from '../components/Rewards/RewardsExtras'
import CashorCard from '../components/Rewards/CashorCard'
const Rewards = () => {

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