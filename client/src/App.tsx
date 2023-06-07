import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Navbar from './components/Navbar';
import Menu from './views/Menu';
import Rewards from './views/Rewards';
import Gifts from './views/Gifts';
import StoreLocator from './views/StoreLocator';
import Signin from './views/Signin';
import CreateAccount from './views/CreateAccount';
import Footer from './components/Footer';
import MenuPrev from './views/MenuPrev'
import MenuFavorites from './views/MenuFavorites';
import MenuFeatured from './views/MenuFeatured';
import Success from './views/Success';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/rewards' element={<Rewards/>}/>
        <Route path='/gifts' element={<Gifts/>}/>
        <Route path='/store-locator' element={<StoreLocator/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/account/create' element={<CreateAccount/>}/>
        <Route path='/menu/previous' element={<MenuPrev/>}/>
        <Route path='/menu/featured' element={<MenuFeatured/>}/>
        <Route path='/menu/favorites' element={<MenuFavorites/>}/>
        <Route path='/welcome' element={<Success/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
