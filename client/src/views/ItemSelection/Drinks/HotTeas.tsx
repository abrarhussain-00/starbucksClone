import React from 'react'
import MenuNav from '../../../components/Menu/MenuNav';
import MenuSideNav from '../../../components/Menu/MenuSideNav';

const HotTeas = () => {
    return (
        <div>
            <MenuNav />
            <br /><br />
            <div className="flex">
                <MenuSideNav />
                <div>
                    <p className='text-start'><a href="/menu">Menu / </a><span className='font-bold' style={{ color: 'gray' }}>Hot Teas</span></p>
                    <br />
                    <p className='font-bold text-start text-[30px]'>Hot Teas</p>
                    <br /><br />
                    <div>
                        <p className='font-bold text-start text-[24px]'>Chai Teas</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="/menu/drinks/caramel-macchiato" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/2d52f16a22fb40ff898be1815ecc952e.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Chai Tea Latte</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/49bf4333e9d048498a59a5a2b958165f.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Chai Tea</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    <div>
                        <p className='font-bold text-start text-[24px]'>Black Teas</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/6f780d5d392542c6b9b1a4412881cecc.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Earl Grey Tea </span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/180da7ecb6fa4d2686babe5619fa7b84.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Teavana® <br/>London Fog <br /> Tea Latte</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/e3554d07d1394ee79cfad80a383ba163.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Royal English<br /> Breakfast Tea </span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/919eb07194f44a0b842c0260c3a286d8.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Royal English<br /> Breakfast Tea <br /> Latte</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    <div>
                        <p className='font-bold text-start text-[24px]'>Green Teas</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/1a84d455abd84ac3b356c6523fce9ac8.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Emperor's <br /> Clouds & <br/> Mist®</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/8b1b6d808cca4787afd2b30cf8dd5676.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Matcha Tea <br /> Latte</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/a5e64777b3cc412e9239b8a37328cb37.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Honey Citrus <br /> Mint Tea </span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/6a59c09bb55c42f8a6a970e73c22caeb.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Jade Citrus - <br /> Mint® Brewed<br /> Tea </span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    <div>
                        <p className='font-bold text-start text-[24px]'>Herbal Teas</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/cf7469c84a444e4f9a341f8023558c77.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Mint Majesty®</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/f3ecda7d7510434c9ed2b3167dcb4466.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Peach Tranquility</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                </div>
            </div>
        </div>
    )
}

export default HotTeas