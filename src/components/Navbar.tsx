import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im'
import { FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"
const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClosedRoutes = () => {
    setOpen(false);
  }

  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    const storedFirstName = localStorage.getItem('firstName');
    if (storedFirstName) {
      setFirstName(storedFirstName);
    }
  }, []);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.assign("/");
  };
  const [showDropdown, setShowDropdown] = useState(false);

  // const handleToggleDropdown = () => {
  //   setShowDropdown(!showDropdown);
  // };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between bg-white p-[1rem]" style={{ borderBottom: '3px solid rgb(224,224,224)' }}>
        <a href="/" className="lg:hidden" style={{ color: 'black', fontWeight: 'bold' }}>
          <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/2034px-Starbucks_Corporation_Logo_2011.svg.png" alt="Starbucks Logo" style={{ height: '40px' }} />
        </a>
        <div className="flex items-center">
          <ul className="hidden lg:flex lg:items-center lg:gap[1rem] lg:ml-[2rem]">
            <li className='hidden sm:block'>
              <a href="/" style={{ color: 'black', fontWeight: 'bold' }}>
                <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/2034px-Starbucks_Corporation_Logo_2011.svg.png" alt="Starbucks Logo" style={{ height: '40px' }} />
              </a>
            </li>
            <li>
              <Link to="/menu" style={{ color: 'black', fontWeight: 'bold', marginLeft: '2rem' }}>MENU</Link>
            </li>
            <li>
              <Link to="/rewards" style={{ color: 'black', fontWeight: 'bold', marginLeft: '2rem' }}>REWARDS</Link>
            </li>
            <li>
              <Link to="/gifts" style={{ color: 'black', fontWeight: 'bold', marginLeft: '2rem' }}>GIFT CARDS</Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex lg:items-center md:order-last">
          <div className='flex items-center mr-[2rem]' >
            <Link to="/store-locator" className="flex items-center text-black">
              <ImLocation className="mr-2" size={20} />
              Find a Store
            </Link>
          </div>
          <ul style={{ display: 'flex', gap: '1rem' }}>
            {firstName ? (
              <li>
                <div className="relative z-50">

                  {/* <button className="flex items-center text-black mr-[2rem]" onClick={handleToggleDropdown}>
                  <FaUserCircle className="mr-2" size={20} /> Account &#9660;
                  </button> */}

                  <button className="flex items-center text-black mr-[2rem]" onClick={handleToggleDropdown}>
                    <FaUserCircle className="mr-2" size={20} />
                    Account
                    <span
                      className={`transition-transform duration-300 transform ${isMenuOpen ? 'rotate-180' : ''
                        }`}
                      style={{
                        display: 'inline-block',
                        verticalAlign: 'middle',
                      }}
                    >
                      &#9660;
                    </span>
                  </button>

                  {/* Add dropdown content here */}
                  {isMenuOpen && (
                    <div className="absolute right-0 mt-2 bg-white shadow-lg rounded py-2 w-40">
                      {/* Add dropdown content options */}
                      <Link to="/home" className="block px-4 py-2 text-black hover:bg-gray-200">
                        Home
                      </Link>
                      <Link to="/account/personal" className="block px-4 py-2 text-black hover:bg-gray-200">
                        Personal Information
                      </Link>
                      <Link to="/account/settings/privacy" className="block px-4 py-2 text-black hover:bg-gray-200">
                        Privacy
                      </Link>
                      <br />
                      <hr />
                      <Link to="/" onClick={handleLogout} className="block px-4 py-2 text-black hover:bg-gray-200">
                        Logout
                      </Link>
                    </div>
                  )}
                </div>
              </li>
            ) : (
              <React.Fragment>
                <li>
                  <Link to="/signin" className='text-black flex items-center'>
                    <button className="text-black px-[1rem] py-1" style={{ borderRadius: '10rem', border: '1px solid black' }}>Sign In</button>
                  </Link>
                </li>
                <li>
                  <Link to="/account/create" className='text-black flex items-center'>
                    <button className="text-white bg-black px-[1rem] py-1" style={{ borderRadius: '10rem', border: 'none', marginRight: '2rem' }}>Join Now</button>
                  </Link>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>

        <div onClick={handleOpen} >
          {!open ? <AiOutlineMenu size={30} className='cursor-pointer lg:hidden' /> : <AiOutlineClose size={30} className='cursor-pointer lg:hidden' />}
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 600, opacity: 0 }}
            transition={{ duration: .3 }}
            className='bg-white w-[80%] h-full z-50 absolute right-0 lg:hidden'
            onClick={handleClosedRoutes}>
            <div className='flex justify-start items-start px-12 py-10'>
              <ul className='text-start'>
                <li className='mb-5'>
                  <Link to="/menu" className='font-600 text-main text-[1.5rem]'>Menu</Link>
                </li>
                <li className='mb-5'>
                  <Link to="/rewards" className='font-600 text-main text-[1.5rem]'>Rewards</Link>
                </li>
                <li className='mb-5'>
                  <Link to="/giftcard" className='font-600 text-main text-[1.5rem]'>Gift Cards</Link>
                </li>
                <ul style={{ display: 'flex', gap: '1rem' }}>
                  {firstName ? (
                    <li>
                      <div className="relative">
                        <button className="text-black font-600 text-main text-[1.5rem]" onClick={handleToggleDropdown}>
                          Account &#9660;
                        </button>
                        {/* Add dropdown content here */}
                        {isMenuOpen && (
                          <div className="absolute right-0 mt-2 bg-white shadow-lg rounded py-2 w-40">
                            {/* Add dropdown content options */}
                            <Link to="/home" className="block px-4 py-2 text-black hover:bg-gray-200">
                              Home
                            </Link>
                            <Link to="/account/personal" className="block px-4 py-2 text-black hover:bg-gray-200">
                              Personal Information
                            </Link>
                            <Link to="/account/settings/privacy" className="block px-4 py-2 text-black hover:bg-gray-200">
                              Privacy
                            </Link>
                            <br />
                            <hr />
                            <Link to="/" onClick={handleLogout} className="block px-4 py-2 text-black hover:bg-gray-200">
                              Logout
                            </Link>
                          </div>
                        )}
                      </div>
                    </li>
                  ) : (
                    <React.Fragment>
                      <li>
                        <Link to="/signin" className='text-black flex items-center'>
                          <button className="text-black px-[1rem] py-1" style={{ borderRadius: '10rem', border: '1px solid black' }}>Sign In</button>
                        </Link>
                      </li>
                      <li>
                        <Link to="/account/create" className='text-black flex items-center'>
                          <button className="text-white bg-black px-[1rem] py-1" style={{ borderRadius: '10rem', border: 'none', marginRight: '2rem' }}>Join Now</button>
                        </Link>
                      </li>
                    </React.Fragment>
                  )}
                </ul>
              </ul>
            </div>
            <hr />
            <div className="flex justify-start px-12">
              <Link to="/store-locator" className="font-semibold flex items-center">
                <ImLocation className="mr-2" size={20} />
                Find a Store
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
