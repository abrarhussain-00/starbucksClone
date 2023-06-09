import React from 'react'
import MenuNav from '../../../components/Menu/MenuNav';
import MenuSideNav from '../../../components/Menu/MenuSideNav';

const IcedTeas = () => {
    return (
        <div>
            <MenuNav />
            <br /><br />
            <div className="flex">
                <MenuSideNav />
                <div>
                    <p className='text-start'><a href="/menu">Menu / </a><span className='font-bold' style={{ color: 'gray' }}>Iced Teas</span></p>
                    <br />
                    <p className='font-bold text-start text-[30px]'>Bottled Teas</p>
                    <br /><br />
                    {/* Bottled Teas */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Bottled Teas</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center flex gap-10">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/de6d02e888c74eac9f6ea19c5492b8e8.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Teavana® Sparkling <br /> Unsweetened...</span>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    {/* Iced Black Teas */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Iced Black Teas</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/7b483f4e212b4e18ac7ed488c10fa25c.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Iced Black Tea</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/f56f2f6798504d72812581fbd3c326b8.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Iced Black Tea <br />Lemonade</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/c21355c84f60481da265614667b168d8.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Iced Royale English<br /> Breakfast Tea Latte </span>
                            </a>
                            <br />
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/530e6f066a5d433d93fcc088e4b39120.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Iced London Fog Tea Latte</span>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    {/* Iced Chai Teas */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Iced Chai Teas</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center flex">
                            <a href="#" className="items-center">
                                <img src="https://img.cdn4dd.com/p/fit=cover,width=1200,height=1200,format=auto,quality=90/media/photosV2/ec36c25c-26da-4813-989c-9f930eef84d2-retina-large.jpg" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Iced Chai Tea Latte</span>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    {/* Iced Green Teas */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Iced Green Teas</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/2e363c918bc74d05965eb6e635293d00.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Iced Peach Green <br /> Tea</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/bebc2b416fb44f69a193be358ad8b3f8.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Iced Peach Green <br /> Tea Lemonade</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/08f75b01cd3c46af9d8665c5912341e7.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Iced Matcha Tea <br /> Latte </span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/2e363c918bc74d05965eb6e635293d00.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Iced Green Tea</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/2e363c918bc74d05965eb6e635293d00.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Iced Green Tea <br />Lemonade</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/08f75b01cd3c46af9d8665c5912341e7.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Iced Matcha<br/>Lemonade </span>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    {/* Iced Herbal Teas */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Iced Herbal Teas</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/e390f12d2da24c7b931c5b548f8c42dc.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Iced Passion <br/> Tango Tea</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/e390f12d2da24c7b931c5b548f8c42dc.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Iced Passion <br /> Tango Tea<br/>Lemonade</span>
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

export default IcedTeas