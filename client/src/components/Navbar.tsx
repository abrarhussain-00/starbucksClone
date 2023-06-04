import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
const Navbar: React.FC = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    // <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'white', padding: '1rem', borderBottom: '3px solid rgb(224,224,224)' }}>
    //   <div style={{ display: 'flex', alignItems: 'center' }}>
    //     <ul style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: '2rem' }}>
    //       <li>
    //         <a href="/" style={{ color: 'black', fontWeight: 'bold' }}>
    //           <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/2034px-Starbucks_Corporation_Logo_2011.svg.png" alt="Starbucks Logo" style={{ height: '40px' }} />
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/menu" style={{ color: 'black', fontWeight: 'bold', marginLeft: '2rem' }}>MENU</a>
    //       </li>
    //       <li>
    //         <a href="/rewards" style={{ color: 'black', fontWeight: 'bold', marginLeft: '2rem' }}>REWARDS</a>
    //       </li>
    //       <li>
    //         <a href="/gifts" style={{ color: 'black', fontWeight: 'bold', marginLeft: '2rem' }}>GIFT CARDS</a>
    //       </li>
    //     </ul>
    //   </div>
    //   <div style={{ display: 'flex', alignItems: 'center' }}>
    //     <div style={{ display: 'flex', alignItems: 'center', marginRight: '2rem' }}>
    //       <a href="/store-locator" style={{ color: 'black' }}>Find Store</a>
    //     </div>
    //     <ul style={{ display: 'flex', gap: '1rem' }}>
    //       <li>
    //         <a href="/signin" style={{ color: 'black', display: 'flex', alignItems: 'center' }}>
    //           <button style={{ color: 'black', padding: '0.5rem', borderRadius: '10rem', border: '1px solid black', marginRight: '2rem' }}>Sign In</button>
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/account/create" style={{ color: 'black', display: 'flex', alignItems: 'center' }}>
    //           <button style={{ background: 'black', color: 'white', padding: '0.5rem', borderRadius: '10rem', border: 'none', marginRight: '2rem' }}>Join Now</button>
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    <nav className="flex items-center justify-between bg-white p-[1rem]" style={{borderBottom: '3px solid rgb(224,224,224)' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <ul style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: '2rem' }}>
          <li>
            <a href="/" style={{ color: 'black', fontWeight: 'bold' }}>
              <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/2034px-Starbucks_Corporation_Logo_2011.svg.png" alt="Starbucks Logo" style={{ height: '40px' }} />
            </a>
          </li>
          <li>
            <a href="/menu" style={{ color: 'black', fontWeight: 'bold', marginLeft: '2rem' }}>MENU</a>
          </li>
          <li>
            <a href="/rewards" style={{ color: 'black', fontWeight: 'bold', marginLeft: '2rem' }}>REWARDS</a>
          </li>
          <li>
            <a href="/gifts" style={{ color: 'black', fontWeight: 'bold', marginLeft: '2rem' }}>GIFT CARDS</a>
          </li>
        </ul>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '2rem' }}>
          <a href="/store-locator" style={{ color: 'black' }}>Find Store</a>
        </div>
        <ul style={{ display: 'flex', gap: '1rem' }}>
          <li>
            <a href="/signin" style={{ color: 'black', display: 'flex', alignItems: 'center' }}>
              <button style={{ color: 'black', padding: '0.5rem', borderRadius: '10rem', border: '1px solid black', marginRight: '2rem' }}>Sign In</button>
            </a>
          </li>
          <li>
            <a href="/account/create" style={{ color: 'black', display: 'flex', alignItems: 'center' }}>
              <button style={{ background: 'black', color: 'white', padding: '0.5rem', borderRadius: '10rem', border: 'none', marginRight: '2rem' }}>Join Now</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
