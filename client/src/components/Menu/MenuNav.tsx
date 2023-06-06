import React from 'react'
import { Link } from 'react-router-dom'
const MenuNav = () => {
  return (
    <div className='bg-[#f9f9f9] w-full h-[50px] flex items-center'>
        <div className='flex justify-start items-center'>
            <ul className='flex px-24 justify-between space-x-4 items-center'>
                <li>
                    <Link to='/menu'>All products</Link>
                </li >
                <li>
                    <Link to="/menu/featured">Featured</Link>
                </li>
                <li>
                    <Link to='/menu/previous'>Previous Orders</Link>
                </li>
                <li>
                    <Link to='/menu/favorites'>Favorite Products</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default MenuNav