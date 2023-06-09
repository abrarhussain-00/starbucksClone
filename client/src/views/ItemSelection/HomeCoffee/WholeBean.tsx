import React from 'react'
import MenuNav from '../../../components/Menu/MenuNav';
import MenuSideNav from '../../../components/Menu/MenuSideNav';

const WholeBean = () => {
    return (
        <div>
            <MenuNav />
            <br /><br />
            <div className="flex">
                <MenuSideNav />
                <div>
                    <p className='text-start'><a href="/menu">Menu / </a><span className='font-bold' style={{ color: 'gray' }}>Whole Bean</span></p>
                    <br />
                    <p className='font-bold text-start text-[30px]'>Whole Bean</p>
                    <br /><br />
                    {/* Americanos */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Blonde Roast</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/7a5dd8efffd04f2ba7337f7ec62d031d.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Starbucks® <br /> Blonde Espresso <br /> Roast</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/faa8d6cf96c24cb29a84335020e3cebe.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Veranda Blend® <br /> Whole Bean <br /> Coffee</span>
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
                                <img src="https://globalassets.starbucks.com/assets/D459C32977D048C2950E05601E3CAF39.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Starbucks <br /> Odyssey Blend™ 2023</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/49291B73E46F4671AD2E87F996A5E74F.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Starbucks Siren's <br /> Blend™ </span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://athome.starbucks.com/sites/default/files/2022-05/CAH_PDP_Pike_1842x1542_Ground_shadow.png" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Pike Place Roast™</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/02eedbc274ba492ea825e05e4678a870.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Organic Yukon<br /> Blend® Whole <br />Bean Coffee </span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/4206041b8d8e4eceb65482588662c331.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Guatemala Antique <br />Whole Bean <br />Coffee</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    {/* Coffee Travelers */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Dark Roast</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/a094d143939140cf8d76d92d0a027bff.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Decaf Sumatra</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://athome.starbucks.com/sites/default/files/2022-05/CAH_PDP_CaffeVerona_1842x1542_Ground_shadow_0.png" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Caffè Verona®</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://athome.starbucks.com/sites/default/files/2022-05/CAH_PDP_Espresso_1842x1542_Ground_shadow.png" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Espresso Roast </span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/08D2265826854BA6AAF20FAD1E1CB9A8.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Starbucks® <br /> Anniversary <br /> Blend 2023</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://i5.peapod.com/c/BU/BUR14.jpg" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Italian Roast</span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/a12da7926012422da863b4841044f8fa.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Komodo Dragon <br /> Blend® </span>
                                <div className='font-bold'>🚫 Not available</div>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00762111287854/79c3e69c7a8c892a487a6d391e083cb5_large.png&width=512&type=webp&quality=90" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Sumatra</span>
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

export default WholeBean