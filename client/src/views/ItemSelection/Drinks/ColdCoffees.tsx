import React from 'react'
import MenuNav from '../../../components/Menu/MenuNav';
import MenuSideNav from '../../../components/Menu/MenuSideNav';

const ColdCoffees = () => {
    return (
        <div>
            <div>
                <MenuNav />
                <br /><br />
                <div className="flex">
                    <MenuSideNav />
                    <div>
                        <p className='text-start'><a href="/menu">Menu / </a><span className='font-bold' style={{ color: 'gray' }}>Cold Coffees</span></p>
                        <br />
                        <p className='font-bold text-start text-[30px]'>Cold Coffees</p>
                        <br /><br />
                        <div>
                            <p className='font-bold text-start text-[24px]'>Cold Brews</p>
                            <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                            <br /><br />
                            <div className="text-center gap-10 grid grid-cols-4 ">
                                <a href="#" className="items-center">
                                    <img src="https://globalassets.starbucks.com/assets/706A80A7DEF041438BB2CD6583C72709.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                    <br />
                                    <span className='text-center'>White Chocolate <br /> Macadamia <br /> Cream Cold Brew</span>
                                </a>
                                <a href="#" className="items-center">
                                    <img src="https://globalassets.starbucks.com/assets/65C29F9028C94BA18AD26D24DE449CEA.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                    <br />
                                    <span className='text-center'>Cinnamon <br /> Caramel Cream <br /> Cold Brew</span>
                                </a>
                                <a href="#" className="items-center">
                                    <img src="https://globalassets.starbucks.com/assets/ff03ead58dde47c485049baa5f736793.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                    <br />
                                    <span className='text-center'>Chocolate Cream <br /> Cold Brew</span>
                                </a>
                                <a href="#" className="items-center">
                                    <img src="https://globalassets.starbucks.com/assets/64da774b521447f690c20290cd4cb29d.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                    <br />
                                    <span className='text-center'>Salted Caramel <br /> Cream Cold Brew </span>
                                </a>
                                <a href="#" className="items-center">
                                    <img src="https://globalassets.starbucks.com/assets/103b2b745f4848f884b793696a4573b6.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                    <br />
                                    <span className='text-center'>Starbucks® Cold <br /> Brew Coffee</span>
                                </a>
                                <a href="#" className="items-center">
                                    <img src="https://globalassets.starbucks.com/assets/07951b9a7d7d47a2892dfa7a707fd318.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                    <br />
                                    <span className='text-center'>Vanilla Sweet <br /> Cream Cold Brew</span>
                                </a>
                                <a href="#" className="items-center">
                                    <img src="https://globalassets.starbucks.com/assets/bcf41cb5ff8f455fa945428c8d05c3f2.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                    <br />
                                    <span className='text-center'>Starbucks® Cold <br /> Brew Coffee with <br /> Milk</span>
                                </a>
                            </div>
                        </div>
                        <br /><br />
                        <p className='font-bold text-start text-[24px]'>Nitro Cold Brews</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/65C29F9028C94BA18AD26D24DE449CEA.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Cinnamon <br /> Caramel Cream <br /> Nitro Cold Brew</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/8c5dcfa053504f85b3e7af2fa451346d.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Nitro Cold Brew</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/30b4049d49f64f8a8085e6d7808b4ae4.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Vanilla Sweet <br /> Cream Nitro Cold <br /> Brew</span>
                            </a>
                        </div>
                        <br /><br />
                        <p className='font-bold text-start text-[24px]'>Iced Coffees</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAABAIDBQYBB//EACsQAAICAgAFAwMEAwAAAAAAAAABAgMEEQUSEzFRIUFhIjKRFHFygQYkM//EABkBAQACAwAAAAAAAAAAAAAAAAABBAIDBf/EAB0RAQACAgIDAAAAAAAAAAAAAAABAgMRBDESISL/2gAMAwEAAhEDEQA/APzgAEqoAAAAAAAAAAAAAAAAZ0dPrQ63/Pa5vT2MDC71qn/FkT0mvcPRywse2tLGyuHWta1GNirk/O/t3+TV+lox5v8AVV15EFp9SrNUI+vde/yeYw81wjvncZr7WvXbNlfE8rElOSf3pp7+SrN8jsV4uKY3L1NLxYwnKdcejr0lG2Vb/qWvqX4ONkSxYwjDHl1Htas37a9U/Rft29iaMZ34EbJ3N1c30xl5+CbG5nfNSWuVdkTiyWtOmHK41MdNqgAWnJAAAAAANbWvIAEHDsWu1OLsUZLybbMiqzHlS4p2rtJnPum677Yp61N9jfRfVGLdkeZvsVL0ne5d/j5Y1p8xrHGfLOTjBPZZiuEnZKD2t62QcRzK8h19Ovk5Y6fyV8KX+rvzJmzHX35Sq83JHhNYnawAG9ygAAAAAAAHE4jHlzLPnTJm2kXcWjq+MvMSCRhK9jn5h8R3sCPLiVr42cFI7df01xXhEw15+oVgnUn5N0HtGSsyAAQAAAAAMMyPWwehGuDmredSkltLWmt9/H4J1/j904qSa7b1zIrMoznFajKSXhMjTZXJasahTgYHBuD8dwrsuM+JYUEp3VzhyuT03y8u+29LbfbZznGyyTnZrnk9y0tLfwjcAi15t21qrXczS0fQSwAAAAAAAAAAAAAAAAAAB//Z" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Iced Coffee</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/062aac2b949a40e188e832c868803b58.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Iced Coffee <br /> with Milk</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/7e0863732426489d81f0167e5a3fdaf2.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Iced Expresso</span>
                            </a>
                        </div>
                        <br /><br />
                        <p className='font-bold text-start text-[24px]'>Iced Shaken Expresso</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/9a51e00fff1c42e8acb62fcbfcef8838.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Iced Toasted <br /> Vanilla Oatmilk <br /> Shaken Espresso</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/5bfe4972905a400c97717ce4176ebe92.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Iced Brown Sugar <br /> Oatmilk Shaken <br /> Espresso</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/b0f45bda44464780a601e51cb404f780.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Iced Chocolate <br /> Almondmilk <br /> Shaken Espresso</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/ce4ff582482446d08d56ab49fe54bc40.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Iced Shaken <br /> Expresso</span>
                            </a>
                        </div>
                        <br /><br />
                        <p className='font-bold text-start text-[24px]'>Iced Lattes</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/f4fd128c834643fa8c74f4ae9f579013.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Iced Caffè Latte</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/b5ee0554cdd64959a86530922cea7991.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Iced Cinnamon <br /> Dolce Latte</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/1b317a079984402895bb5cf4d2894940.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Iced Starbucks® - <br /> Blonde Vanilla <br /> Latte</span>
                            </a>
                        </div>
                        <br /><br />
                        <p className='font-bold text-start text-[24px]'>Iced Macchiatos</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/363835b1db024636adeb4089ebb96291.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Iced Caramel <br /> Macchiato</span>
                            </a>
                        </div>
                        <br /><br />
                        <p className='font-bold text-start text-[24px]'>Iced Mochas</p>
                        <hr style={{ height: '1px', background: 'gray', width: '100%' }} />
                        <br /><br />
                        <div className="text-center gap-10 grid grid-cols-4 ">
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/b80d893714854b5c946ee6c7f0d369d7.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Iced White <br /> Chocolate Mocha</span>
                            </a>
                            <a href="#" className="items-center">
                                <img src="https://globalassets.starbucks.com/assets/0360378c6e774cc3a38d870fc75d5462.jpg?impolicy=1by1_wide_topcrop_630" width={150} className="rounded-full mr-2" />
                                <br />
                                <span className='text-center'>Iced Caffè Mocha</span>
                            </a>
                        </div>
                        <br /><br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColdCoffees