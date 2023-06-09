import React from 'react'
import MenuNav from '../../../components/Menu/MenuNav';
import MenuSideNav from '../../../components/Menu/MenuSideNav';

const Lunch = () => {
    return (
        <div>
            <MenuNav />
            <br /><br />
            <div className="flex">
                <MenuSideNav />
                <div>
                    <p className='text-start'><a href="/menu">Menu / </a><span className='font-bold' style={{ color: 'gray' }}>Hot Coffees</span></p>
                    <br />
                    <p className='font-bold text-start text-[30px]'>Lunch</p>
                    <br /><br />
                    <div>
                        <p className='font-bold text-start text-[24px]'>Warm Sandwiches</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/02ea801e3aca434fa2fcccfcd4adba8c.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Crispy Grilled Cheese<br/>On Sourdough</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/39c8d371efed45f18ba0d21f59c6229a.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Ham & Swiss On <br/>Baguette</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/29a78190283c40f0a7978baa7f637e05.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Turkey, Provolone & <br/>Pesto on Ciabatta</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/c5bab25d33c1475aa7a23d9d09145b2f.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Tomato & Mozzarella<br/>On Focaccia</span>
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
                        <p className='font-bold text-start text-[24px]'>Protein Boxes</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/b2a7ab59ca1c430f8e2726df52a6e6da.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Egg & Gouda Protein <br/>Box</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/87caae0d7e7a46f9868b9e49208f6b02.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Cheese Trio Protein<br/>Box</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/6ab18a5258254c998089346c67432f11.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Cheddar & Uncured <br/>Salami Protein Box</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/f9c7a91ad6f2408ba19d7a274dadeadd.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Eggs & Cheddar<br /> Protein </span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/85c505911d6a408fb93b8b0b069cc9ad.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>PB&J Protein Box</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/8fe70ac5d94145319fdd6f23545c8aa1.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Cheddar & Fruit<br/>Protein Box</span>
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

export default Lunch