import React, { useEffect, useState } from 'react';
import MenuNav from '../components/Menu/MenuNav'
import { Link } from 'react-router-dom'

const MenuFavorites = () => {
  const [firstName, setFirstName] = useState('');
  useEffect(() => {
    const storedFirstName = localStorage.getItem('firstName');
    if (storedFirstName) {
      setFirstName(storedFirstName);
    }
  }, []);

  return (
    <>
      <MenuNav />
      <div className="flex flex-col items-start justify-start px-24 py-20">
        <h1 className="font-semibold text-[24px] text-main text-left">
          Favorite Orders
        </h1>
        <div className="py-10">
          <img
            src="https://www.starbucks.com/weblx/images/fav-tapes.png"
            alt="Menu Fav"
            width={200}
          />
          <br />
          <div className="text-left">
            <h1 className="font-semibold text-[24px] text-main text-left">
              Save your favorite mixes
            </h1>
            <br />
            <p>
              Use the heart to save customizations.<br /> Your favorites will appear here <br />to order again.
            </p>
          </div>
          <br />
          {firstName ? "" :
            <div className="flex items-center j">
              <Link to="/signin" className="text-black flex items-center">
                <button
                  className="text-black p-[0.5rem] mr-[2rem]"
                  style={{ borderRadius: "10rem", border: "1px solid black" }}
                >
                  Sign In
                </button>
              </Link>
              <Link to="/signin" className="text-black flex items-center">
                <button
                  className="text-white bg-black p-[0.5rem]" style={{ borderRadius: '10rem', border: 'none', marginRight: '2rem' }}
                >
                  join Now
                </button>
              </Link>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default MenuFavorites