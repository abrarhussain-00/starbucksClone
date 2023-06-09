import React from 'react'
import MenuNav from '../../../components/Menu/MenuNav';
import MenuSideNav from '../../../components/Menu/MenuSideNav';

const ViaInstant = () => {
    return (
        <div>
            <MenuNav />
            <br /><br />
            <div className="flex">
                <MenuSideNav />
                <div>
                    <p className='text-start'><a href="/menu">Menu / </a><span className='font-bold' style={{ color: 'gray' }}>VIA® Instant</span></p>
                    <br />
                    <p className='font-bold text-start text-[30px]'>VIA® Instant</p>
                    <br /><br />
                    {/* Breakfast Sandwiches & Wraps */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Flavored</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center flex">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/713f533b151b4d4d92d76eddeb06d4a2.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>VIA® Sweetened <br /> Iced Coffee</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    {/* Brewed Coffees */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Blonde Roast</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/3f85a9b6cbdf4e1c90ad02bb8be1acfa.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>VIA® Veranda <br /> Blend™</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    {/* Brewed Coffees */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Medium Roast</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/4c4bd49d19984ce29cc5f158a0242687.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Starbucks VIA® <br /> Instant Pike <br /> Place® Roast</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    {/* Brewed Coffees */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Dark Roast</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/d0fdab89dd634b1b90e6468a947f2c53.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>VIA® Decaf <br /> Italian Roast</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/375825d752104a3ca4a91af1a6068373.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>VIA® Italian <br /> Roast</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
}

export default ViaInstant