import React from 'react'
import MenuNav from '../../../components/Menu/MenuNav';
import MenuSideNav from '../../../components/Menu/MenuSideNav';

const ColdDrinks = () => {
    return (
        <div>
            <MenuNav />
            <br /><br />
            <div className="flex">
                <MenuSideNav />
                <div>
                    <p className='text-start'><a href="/menu">Menu / </a><span className='font-bold' style={{ color: 'gray' }}>Cold Drinks</span></p>
                    <br />
                    <p className='font-bold text-start text-[30px]'>Cold Drinks</p>
                    <br /><br />
                    {/* Bottled Teas */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Starbucks Refreshers™</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/358b62402a844a3e9567d70a9790032f.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Dragon Drink<br/>Starbucks<br/>Refresher<br/>Beverage</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/c51376156a204e69aba133d3b9009171.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Mango Dragonfruit<br/>Starbucks<br/>Refresher<br/>Beverage</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/5474a99cd4854a909613ae6e094dbfc9.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Mango Dragonfruit<br/>Lemonade<br/>Starbucks<br/>Refresher<br/>Beverage</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/7ef4d20aa4ed4587ac02b0e694edceef.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Paradise Drink <br />Starbucks <br/>Refresher<br/>Beverage</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/0a7f3df9fe5b4152940bd84bb2bea7f3.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Strawberry Accai <br />Lemonade <br/>Starbucks <br/>Refresher<br/>Beverage</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/4967c4f8e64346fcb8404948c283dd00.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Pineaaple <br/>Passionfruit<br/>Starbucks <br/>Refresher<br/>Beverage</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/4967c4f8e64346fcb8404948c283dd00.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Pineaaple <br/>Passionfruit<br/>Lemonade<br/>Starbucks <br/>Refresher<br/>Beverage</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://www.digitalassets.starbucks.eu/sites/starbucks-medialibrary/files/Pink-Coconut-REVISED.jpeg" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Pink Drink <br/>Starbucks<br/>Refresher<br/>Beverage</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/3a62ac7842934f4991ddca2b9bb4c029.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Strawberry Accai<br/>Starbucks<br/>Refresher<br/>Beverage</span>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    {/* Juice */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Juice</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/a907648a21784d748b11cbf132c56772.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Starbucks <br /> BAYA Energy <br /> Mango Guava</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/e707826e061046d79b26cc165ec190a6.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Evolution <br /> Fresh Organic <br /> Vital Berry</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/3a62ac7842934f4991ddca2b9bb4c029.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Evolution<br /> Fresh Organic<br/>Defense Up </span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/e07696c46d774fb3b971773b433bab0b.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Evolution<br /> Fresh Organic</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/3f7604be154a4f6790defa0a27c9ad20.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Evolution<br /> Fresh Organic<br/>Super Fruit <br/>Greens</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/24f36ed0145d4511840bd543506c7da0.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Evolution <br /> Fresh Mighty <br /> Watermelon</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/307222bd6ea446758f6a190861bf8b24.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Tree Top Apple<br /> Juice Box </span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/381ddaee19154b759eeea816c1890aec.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Blended Starwberry <br/>Lemonade</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/bf2959cba06c42f0a1fc41c11da5f44c.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Starbucks <br /> BAYA Energy <br/>Raspberry <br/>Lime</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/b5d9c74a812a4b46b2a100baed559f84.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Lemonade</span>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    {/* Milk */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Milk</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="data:image/jpeg;base64,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" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Horizon<br/>Chocolate<br/>Organic Milk</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/b8ee8032716f46f48167c1227577eddf.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Horizon<br/>Lowfat<br/>Milk Box</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/22957ce7f042474892b8fe1e75d76ebe.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Cold Milk</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/c9a4d94f65fc49f2810084402a729d90.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Horizon<br/>Vanilla<br/>Milk Box</span>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    {/* Sparkling Water */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Sparkling Water</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/f0ce895c1080458eab6d026890f26de3.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Galvanina Sparkling<br/>Water</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="data:image/jpeg;base64,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" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Spindrift<br/>Grapefruit<br/>Sparkling<br/>Water</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/959fee492e90447b8d17fbf511b36819.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Spindrift<br/>Raspberry<br/>Lime<br/>Sparkling<br/>Water</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/fc7cf27aec2f4487a743af97d9057cfd.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Galvanina Sparkling<br/>Water -Lime</span>
                            </a>
                        </div>
                    </div>
                    <br /><br />
                    {/* Water */}
                    <div>
                        <p className='font-bold text-start text-[24px]'>Water</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/fe3ff74bbc4442d9bd1874f0e2f8c285.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>DASANI Bottle Water</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/db9386b255ed440b893861e87f368934.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Ehtos Bottle Water</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/ae65fe747ff242789a426bce82b47b9e.jpg?impolicy=1by1_tight_288" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Hawai'i Volcanic Water</span>
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

export default ColdDrinks