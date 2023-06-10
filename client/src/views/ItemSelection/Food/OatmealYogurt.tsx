import React from 'react'
import MenuNav from '../../../components/Menu/MenuNav';
import MenuSideNav from '../../../components/Menu/MenuSideNav';

const OatmealYogurt = () => {
    return (
        <div>
            <MenuNav />
            <br /><br />
            <div className="flex">
                <MenuSideNav />
                <div>
                    <p className='text-start'><a href="/menu">Menu / </a><span className='font-bold' style={{ color: 'gray' }}>Oatmeal & Yogurt</span></p>
                    <br />
                    <p className='font-bold text-start text-[30px]'>OatMeal & Yogurt</p>
                    <br /><br />
                    {/* Breakfast Sandwiches & Wraps */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Breakfast Sandwiches & Wraps</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center flex gap-20">
                            <a href="/menu/food/oat-meal-yogurt/check" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/D1FB41D7B2A646A6865E707D25FB9CBF.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Rolled & Steel-Cut<br/>Oatmeal</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/bb65a9c21ce34ad5b9f99f58615b8211.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Berry Trio Parfait</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/d9814c54a23442e880665176d4047a13.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Strawberry Overnight<br/>Grains</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                </div>
            </div>
            <br />
        </div>
    );
}

export default OatmealYogurt