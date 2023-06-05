import React from "react";
import MenuNav from "../components/MenuNav";
import { Link } from "react-router-dom";
const MenuPrev = () => {
  return (
    <>
      <MenuNav />
      <div className="flex flex-col items-start justify-start px-24 py-20">
        <h1 className="font-semibold text-[24px] text-main text-left">
          Previous Orders
        </h1>
        <div className="py-10">
          <img
            src="https://www.starbucks.com/weblx/images/moon-phases.gif"
            alt=""
          />
          <div className="text-left">
            <h1 className="font-semibold text-[24px] text-main text-left">
              When history repeats itself
            </h1>
            <br/>
            <p>
              Previous orders will appear here to <br></br>quickly order again.
            </p>
          </div>
            <br/>
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
        </div>
      </div>
    </>
  );
};

export default MenuPrev;
