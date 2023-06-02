import React from 'react';

const Footer = () => {
  return (
    <footer className="m-10">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0">
          <h3 className="mb-4 text-lg">About Us</h3>
          <ul>
            <li><a href="#" className="text-black-500">Our Company</a></li>
            <li><a href="#" className="text-black-500">Our Coffee</a></li>
            <li><a href="#" className="text-black-500">Stories and News</a></li>
            <li><a href="#" className="text-black-500">Starbucks Archive</a></li>
            <li><a href="#" className="text-black-500">Investor Relations</a></li>
            <li><a href="#" className="text-black-500">Customer Service</a></li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0">
          <h3 className="mb-4 text-lg">Careers</h3>
          <ul>
            <li><a href="#" className="text-black-500">Culture and Values</a></li>
            <li><a href="#" className="text-black-500">Inclusion, Diversity, and Equity</a></li>
            <li><a href="#" className="text-black-500">College Achievement Plan</a></li>
            <li><a href="#" className="text-black-500">Alumni Community</a></li>
            <li><a href="#" className="text-black-500">U.S. Careers</a></li>
            <li><a href="#" className="text-black-500">International Careers</a></li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0">
          <h3 className="mb-4 text-lg">Social Impact</h3>
          <ul>
            <li><a href="#" className="text-black-500">People</a></li>
            <li><a href="#" className="text-black-500">Planet</a></li>
            <li><a href="#" className="text-black-500">Environmental and Social Impact Reporting</a></li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0">
          <h3 className="mb-4 text-lg">For Business Partners</h3>
          <ul>
            <li><a href="#" className="text-black-500">Landlord Support Center</a></li>
            <li><a href="#" className="text-black-500">Suppliers</a></li>
            <li><a href="#" className="text-black-500">Corporate Gift Card Sales</a></li>
            <li><a href="#" className="text-black-500">Office and Foodservice Coffee</a></li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0">
          <h3 className="mb-4 text-lg">Order and Pick Up</h3>
          <ul>
            <li><a href="#" className="text-black-500">Order on the app</a></li>
            <li><a href="#" className="text-black-500">Order on the web</a></li>
            <li><a href="#" className="text-black-500">Delivery</a></li>
            <li><a href="#" className="text-black-500">Order and Pick Up Options</a></li>
            <li><a href="#" className="text-black-500">Explore and Find Coffee for Home</a></li>
          </ul>
        </div>
      </div>
      <br />
      <div className="border-b-2 border-gray-300"></div>
      <br />
      <div className="flex justify-center items-center">
        {/* Spotify */}
        <img src='https://img.icons8.com/?size=512&id=11116&format=png' width='35px' className="mr-2" />
        {/* Facebook */}
        <img src='https://img.icons8.com/?size=512&id=118490&format=png' width='35px' className="mr-2" />
        {/* Pinterest */}
        <img src='https://img.icons8.com/?size=512&id=11101&format=png' width='35px' className="mr-2" />
        {/* Instagram */}
        <img src='https://img.icons8.com/?size=512&id=85140&format=png' width='35px' className="mr-2" />
        {/* Twitter */}
        <img src='https://img.icons8.com/?size=512&id=60452&format=png' width='35px' className="mr-2" />
      </div>
      <br />
      <div className="flex flex-wrap justify-center">
        <p className="mr-2 mb-2 md:mb-0">Privacy Notice |</p>
        <p className="mr-2 mb-2 md:mb-0">Terms of Use |</p>
        <p className="mr-2 mb-2 md:mb-0">Do Not Share My Personal Information |</p>
        <p className="mr-2 mb-2 md:mb-0">CA Supply Chain Act |</p>
        <p>Cookie Preferences</p>
      </div>
      <br />
      <div className="flex justify-center">
        © 2023 Starbucks Coffee Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
