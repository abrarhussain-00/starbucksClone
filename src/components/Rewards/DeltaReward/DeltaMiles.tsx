import React from 'react'
import InnerDelta from './InnerDelta'
import GreenBg from '../../../assets/rewardsImg/greenBg.webp'
const DeltaMiles = () => {
    return (
        <div className='w-full h-[600px] bg-cover relative z-10' style={{ backgroundImage: `url(${GreenBg})` }}>
        <InnerDelta />
      </div>
      
    )
}

export default DeltaMiles
