import React, { useEffect, useState } from 'react';
import MenuNav from "../components/Menu/MenuNav";
import { Link } from "react-router-dom";
import abrarjordan from "../assets/abrarjordan.jpeg";

const MenuPrev = () => {
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
            Previous Orders
          </h1>
        </div>
      {firstName ? "" : (
        < div className="items-start justify-start px-24 mb-20">
          <img
            src="https://www.starbucks.com/weblx/images/moon-phases.gif"
            alt=""
          />
          <div className="text-left">
            <h1 className="font-semibold text-[24px] text-main text-left">
              When history repeats itself
            </h1>
            <br />
            <p>
              Previous orders will appear here to <br></br>quickly order again.
            </p>
          </div>
          <br />
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
          {/* <img src={abrarjordan} alt="image" style={{borderRadius: '50%'}} width={300}/> */}
        </div>
        )}
    </>
  );
};

export default MenuPrev;
