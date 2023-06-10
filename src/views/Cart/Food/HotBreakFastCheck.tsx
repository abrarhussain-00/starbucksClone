import React from 'react'
import Checkout from '../../../components/Checkout'

const HotBreakFastCheck = () => {
    return (
        <div>
        <div className='mb-10'>
            <div className='bg-[#f9f9f9] w-full h-[50px] flex items-center'>
                <div className='flex justify-start items-center'>
                    <ul className='flex px-24 justify-between space-x-4 items-center'>
                        <li>
                            <a href='/menu'>Menu / </a><a href='/menu/food/hot-breakfast'>Hot Breakfast / </a><b>Chicken, Mapple Butter & Egg Sandwhich</b>
                        </li >
                    </ul>
                </div>
            </div>
            <div className='bg-[rgb(31,56,51)]' >
                <div>
                    <div className='flex justify-evenly'>
                        <div className=''><img src="https://globalassets.starbucks.com/assets/012cdfb74d294be28ca6604768408c4b.jpg?impolicy=1by1_medium_630" alt="Caramel Macchiato" width={300} /></div>
                        <div className='flex flex-col items-center mt-20 mb-20'>
                            <div className='text-left'>
                                <div className='text-white' style={{ fontSize: '35px' }}>Chicken, Mapple Butter & Egg Sandwhich</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
                <div className='mt-7'>
                    <div className='flex justify-evenly'>
                        <div className='text-left'>
                            <div className='text-black' style={{ fontSize: '25px' }}>Size Options</div>
                            <hr className='responsive-hr' style={{ borderTop: '2px solid green' }} />
                        </div>
                        <div className='flex flex-col items-center'>
                            <div className='text-left'>
                                <div className='text-black' style={{ fontSize: '25px' }}>What's included</div>
                                <hr className='responsive-hr' style={{ borderTop: '2px solid green' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
        <br />
            <Checkout/>
        <br />
        </div>
    )
}

export default HotBreakFastCheck