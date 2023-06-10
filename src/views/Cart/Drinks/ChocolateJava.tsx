import React from "react";
import Checkout from "../../../components/Checkout";
const ChocolateJava = () => {
  return <div>
    <div>
        <div className='mb-10'>
            <div className='bg-[#f9f9f9] w-full h-[50px] flex items-center'>
                <div className='flex justify-start items-center'>
                    <ul className='flex px-24 justify-between space-x-4 items-center'>
                        <li>
                            <a href='/menu'>Menu / </a><a href='/menu/drinks/frappacino'>Frappuccino Blended Beverage / </a><b>Chocolate Java Mint Frappuccino® Blended Beverage</b>
                        </li >
                    </ul>
                </div>
            </div>
            <div className='bg-[rgb(31,56,51)]' >
                <div>
                    <div className='flex justify-evenly'>
                        <div className=''><img src="https://globalassets.starbucks.com/assets/7FD73D3C93AF43FFA84400A42EFC9F87.jpg?impolicy=1by1_wide_topcrop_630" alt="Caramel Macchiato" width={300} /></div>
                        <div className='flex flex-col items-center mt-20 mb-20'>
                            <div className='text-left'>
                                <div className='text-white' style={{ fontSize: '35px' }}>Chocolate Java <br/>Mint Frappuccino® <br/>Blended Beverage</div>
                                <div className='text-gray-400 ' style={{ fontSize: '25px' }}>490 calories</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
        <br />
            <Checkout/>
        <br />
        </div>
  </div>
};

export default ChocolateJava;
