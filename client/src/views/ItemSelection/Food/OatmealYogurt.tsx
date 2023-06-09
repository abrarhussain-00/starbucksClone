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
                            <a href="#" className="items-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtsmYCKDgr-f-yqPSYJDr3c5K-omrhCy0VFrfEgpk5hA&s" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Caffè Americano</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtsmYCKDgr-f-yqPSYJDr3c5K-omrhCy0VFrfEgpk5hA&s" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Caffè Americano</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtsmYCKDgr-f-yqPSYJDr3c5K-omrhCy0VFrfEgpk5hA&s" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Caffè Americano</span>
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