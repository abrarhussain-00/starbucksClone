import React from 'react'
import MenuNav from '../../../components/Menu/MenuNav';
import MenuSideNav from '../../../components/Menu/MenuSideNav';

const SnacksSweets = () => {
    return (
        <div>
            <MenuNav />
            <br /><br />
            <div className="flex">
                <MenuSideNav />
                <div>
                    <p className='text-start'><a href="/menu">Menu / </a><span className='font-bold' style={{ color: 'gray' }}>Hot Breakfast</span></p>
                    <br />
                    <p className='font-bold text-start text-[30px]'>Snacks & Sweets</p>
                    <br /><br />
                    {/* Breakfast Sandwiches & Wraps */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Biscotti & Cookies</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/d76e82a4f5434f719083b3b2d03bf008.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Madeleines</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/8a984f426b504c6fa6af895cd09cf8df.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Vanilla Biscotti<br/>with Almonds</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/c5d9a97775544dfb87e1c4283c0e70fd.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Shortbread <br/>Cookies</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/88eb640cf0844a0a82db9fbfb8a679d7.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Rip van-Waffles-<br/>Honeys & Oats</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    {/* Brewed Coffees */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Chocolates & Candy</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/1ddc6371b2dc4bdc929fac84d962e01a.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Salted Almonds<br/>Chocolate Bites</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/c4bd8788c72b416c99c5134680e1c8e5.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Dark Chocolate <br /> Covered Espresso <br /> Beans</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/806e28baa7f5412a8300774ac4eda5ae.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Dark Chocolate <br /> Peanut Butter <br /> Cups</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    {/* Americanos */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Fruit & Nuts</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center flex">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/b861c0fb0ffb45b4833131cec8524a1c.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Squirrel Band <br/> Fruits & Nuts</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/b510d3c921ec4e4b918759886fc8441d.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Peter Rabbit<br/>Organic<br/>Strawberry Bannana</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    {/* Expresso Shots */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Gum & Mints
</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/ec519dd5642c41629194192cce582135.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Expresso</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/e9330b18ae524e69bdcbe97460d6f5bb.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Expresso Con Panna</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    <div>
                        <p className='font-bold text-start text-[24px]'>Popcorn & Chips</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/77801559b72b469583f4d484adc1bfa7.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Flat White</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/77801559b72b469583f4d484adc1bfa7.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Honey <br /> Almondmilk Flat</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    {/* Lattes */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Meat & Cheese</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/f4fd128c834643fa8c74f4ae9f579013.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Caffè Latte</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/284e1571faa748f2889d0b566b71d578.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Cinnamon Dolce <br /> Latte</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/b635f407bbcd49e7b8dd9119ce33f76e.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Starbucks® <br /> Blonde Vanilla <br /> Latte</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    {/* Macchiatoes */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Snack Bars</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/630461ac0c2548cba7e2ab6482bc6477.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Caramel Macchiato</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/26495f2a8b644fe8960dd74e1891b7b7.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Expresso <br /> Macchiato</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                    {/* Mochas */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Spreads
</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/915736da018842e788147f7eab73db73.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Caffè Mocha</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/3eab25199e994b689fa5c047fc31f217.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>White Chocolate <br /> Mocha</span>
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

export default SnacksSweets