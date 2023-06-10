import React from 'react'
import MenuNav from '../components/Menu/MenuNav'
import MenuSideNav from '../components/Menu/MenuSideNav'
import MenuItems from '../components/Menu/MenuItems'

const Menu = () => {
  return (
    <div>
      <MenuNav />
      <br /><br />
      <div className="flex">
        <MenuSideNav />
        <MenuItems />
      </div>
      <br />
    </div>
  )
}

export default Menu