import React from 'react'

const MenuSideNav = () => {
    return (
        <div className=''>
            <div className="hidden md:block px-24">
                <div>
                    <h2 className="text-xl font-bold mb-4 text-start">Drinks</h2>
                    <ul className="list-none ml-0 text-start">
                        <li style={{color:'gray'}}><a href="/menu/drinks/hot-coffees">Hot Coffees</a></li>
                        <li style={{color:'gray'}}><a href="/menu/drinks/hot-teas">Hot Teas</a></li>
                        <li style={{color:'gray'}}><a href="/menu/drinks/hot-drinks">Hot Drinks</a></li>
                        <li style={{color:'gray'}}><a href="">Frappuccino® Blended Beverages</a></li>
                        <li style={{color:'gray'}}><a href="/menu/drinks/cold-coffees">Cold Coffees</a></li>
                        <li style={{color:'gray'}}><a href="/menu/drinks/iced-teas">Iced Teas</a></li>
                        <li style={{color:'gray'}}><a href="/menu/drinks/cold-drinks">Cold Drinks</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold mt-6 mb-4 text-start">Food</h2>
                    <ul className="list-none ml-0 text-start">
                        <li style={{color:'gray'}}><a href="/menu/food/hot-breakfast">Hot Breakfast</a></li>
                        <li style={{color:'gray'}}><a href="/menu/food/oatmeal-yogurt">Oatmeal &amp; Yogurt</a></li>
                        <li style={{color:'gray'}}><a href="/menu/food/bakery">Bakery</a></li>
                        <li style={{color:'gray'}}><a href="/menu/food/lunch">Lunch</a></li>
                        <li style={{color:'gray'}}><a href="/menu/food/snacks-sweets">Snacks &amp; Sweets</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold mt-6 mb-4 text-start">At Home Coffee</h2>
                    <ul className="list-none ml-0 text-start">
                        <li style={{color:'gray'}}><a href="#">Whole Bean</a></li>
                        <li style={{color:'gray'}}><a href="#">VIA® Instant</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold mt-6 mb-4 text-start">Merchandise</h2>
                    <ul className="list-none ml-0 text-start">
                        <li style={{color:'gray'}}><a href="#">Cold Cups</a></li>
                        <li style={{color:'gray'}}><a href="#">Tumblers</a></li>
                        <li style={{color:'gray'}}><a href="#">Mugs</a></li>
                        <li style={{color:'gray'}}><a href="#">Water Bottles</a></li>
                        <li style={{color:'gray'}}><a href="#">Other</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-bold mt-6 mb-4 text-start">Gift Cards</h2>
                    <ul className="list-none ml-0 text-start">
                        <li style={{color:'gray'}}><a href="#">Happy Birthday</a></li>
                        <li style={{color:'gray'}}><a href="#">Thank You</a></li>
                        <li style={{color:'gray'}}><a href="#">Traditional</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MenuSideNav