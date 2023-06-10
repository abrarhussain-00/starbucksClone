import React from 'react'
import MenuNav from '../../../components/Menu/MenuNav';
import MenuSideNav from '../../../components/Menu/MenuSideNav';

const ColdCups = () => {
    return (
        <div>
            <MenuNav />
            <br /><br />
            <div className="flex">
                <MenuSideNav />
                <div>
                    <p className='text-start'><a href="/menu">Menu / </a><span className='font-bold' style={{ color: 'gray' }}>Cold Cups</span></p>
                    <br />
                    <p className='font-bold text-start text-[30px]'>Cold Cups</p>
                    <br /><br />
                    {/* Breakfast Sandwiches & Wraps */}
                    <div>
                        <div className="text-center flex">
                            <a href="/menu/merchandise/cold-cups/check" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/b3c749e064534f608fcc84076329f39d.jpg?impolicy=1by1_medium_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Cold To-Go <br /> Cup 24 fl oz</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
}

export default ColdCups