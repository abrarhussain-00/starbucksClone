import React from 'react'
import MenuNav from '../../../components/Menu/MenuNav';
import MenuSideNav from '../../../components/Menu/MenuSideNav';

const Bakery = () => {
    return (
        <div>
            <MenuNav />
            <br /><br />
            <div className="flex">
                <MenuSideNav />
                <div>
                    <p className='text-start'><a href="/menu">Menu / </a><span className='font-bold' style={{ color: 'gray' }}>Bakery</span></p>
                    <br />
                    <p className='font-bold text-start text-[30px]'>Bakery</p>
                    <br /><br />
                    {/* Americanos */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Bagels</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4">
                            <a href="/menu/food/bakery/check" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/2362e79aa0ab4c37a930956c67ab557a.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Plain Bagels</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/2362e79aa0ab4c37a930956c67ab557a.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Everything Bagles</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/3d32d9ac0991482596873baa3f649211.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Avocado Spread</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    {/* Brewed Coffees */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Cake Pops</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/EE77415195F54BF98ECCCC30185CE771.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Bumble Bee Cake Pop</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/16ac697da62a4db3add2a1addc2b3799.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Cookies & Creams Cake<br/>Pop</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/5465db4bce6140609788162ffa76c41f.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Birthday Cake Pop</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/9ca96bf78afb4b91975946fd4528c24d.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Chocolate Cake Pop</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    {/* Americanos */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Cookie, Brownies & Bar</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/c2e47d51ab104439a7bc2f76e0903285.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Bullseye Cookie</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/f827715797044a78bb79b86728a079cf.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Double Chocolate <br/>Brownies</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/7274a0da5453434aaa63b133edd3ce5c.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Chocolate Chip Cookies</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/f4c1a1c5044d4f5e883ac4cbc401cf32.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Marshmallow Dream Bar</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    {/* Expresso Shots */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Croissants</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/4ad44b1732ba425d9d095f3fa0a09771.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Ham & Swiss Croissant</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/e39e1d6044634535a027301d982c5842.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Butter Croissant</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="data:image/jpeg;base64,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" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Chocolate Croissant</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>                           
                        </div>
                    </div>
                    <br /><br />
                    {/* Flat Whites */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Loaves, Cakes & Buns</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/94a08a1ea84f465f86fdfe22c035598c.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Red Velvet Loaf</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/f245bb86e2b74e42b8e6888f886930ef.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Cinnamon Coffee Loaf</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/c636153c255049a487da5db5b9d5f631.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Iced Lemon Loaf</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/383fdc2a74234d0f97adf670d009541a.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Pumpkin & Pepita Loaf</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                           
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/eef689b61a0b4e71bfab30a20f89b589.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Banana Walnut & Pecan Loaf</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                           
                        </div>
                    </div>
                    <br /><br />
                    {/* Lattes */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Danishes & Doughnuts</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/b87eeb626b344c4a8ccb042e4aff4ab9.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Cheese Danish</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/1525945a0a0342eaa028aa20053b982f.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Glazed Dougnut<br /> Latte</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    {/* Macchiatoes */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Muffins & Scones</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/be269a8f32c14f0cb58b81a50d1d100e.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Blueberry Scone</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/16c051a3e36d4ee0ba4007396fe9f479.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Petite Vanilla Bean<br/>Scone</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/7d4665b4af2541e387336966c6e3f1fb.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Blueberry Scone</span>
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

export default Bakery