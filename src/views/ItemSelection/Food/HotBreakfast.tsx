import React from 'react'
import MenuNav from '../../../components/Menu/MenuNav';
import MenuSideNav from '../../../components/Menu/MenuSideNav';

const HotBreakfast = () => {
    return (
        <div>
            <MenuNav />
            <br /><br />
            <div className="flex">
                <MenuSideNav />
                <div>
                    <p className='text-start'><a href="/menu">Menu / </a><span className='font-bold' style={{ color: 'gray' }}>Hot Breakfast</span></p>
                    <br />
                    <p className='font-bold text-start text-[30px]'>Hot Breakfast</p>
                    <br /><br />
                    {/* Breakfast Sandwiches & Wraps */}
                    {/* Brewed Coffees */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Breakfast Sandwhichs & Wraps</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="/menu/food/hot-breakfast/check" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/012cdfb74d294be28ca6604768408c4b.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Chicken, Mapple Butter & <br/>Egg Sandwhich</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/27bd607e92354742bc8cf46b23f4ce39.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Bacon, Sausage & Egg <br /> Wrap</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/f9a4cd143c4342abbb4f60b7fab4e6df.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Impossible Breakfast<br /> Sandwhich</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/76909e4b00b5430faef132b2fa93e40b.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Bacon, Gouda & Egg<br /> Sandwhich </span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/a37c3ec673fa42f98f3b123a7d7ebbfe.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Double-Smoked Bacon,<br/>Cheddar & Egg<br/>Sandwhich</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/b7e25a03655741869ced8dfde8c70659.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Turkey Bacon, Cheddar<br/>& Egg White Sandwhich</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/c96aed66f1bf4ba3a9a545a497873ede.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Sausage, Cheddar & Egg <br/> Sandwhich</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/e4583a7fdc89458983fdacb248debb10.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Spinach, Feta & Egg <br/> White Wrap</span>
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
                    {/* Expresso Shots */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Sous Vide Egg Bites</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://fastfoodnutrition.org/item-photos/full/161012519820592i.jpg" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Kale & Mushroom Egg<br/>Bites</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/9e2c9538d66e4c43844b154b14b2f501.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Egg White & Rosted<br/>Red Pepper Egg Bites</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/ff22cb70c2fe4ba6b3d30150b0cf89cf.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Bacon & Gruyere Egg<br/>Bites</span>
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

export default HotBreakfast