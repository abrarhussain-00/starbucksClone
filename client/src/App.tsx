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
import SettingsPrivacy from './views/SettingsPrivacy';
import HomeLogin from './views/HomeLogin'
import PersonalInfo from './views/PersonalInfo';
import HotCoffees from './views/ItemSelection/Drinks/HotCoffees';
import HotTeas from './views/ItemSelection/Drinks/HotTeas';
import HotDrinks from './views/ItemSelection/Drinks/HotDrinks';
import Frappacino from './views/ItemSelection/Drinks/Frappacino';
import ColdCoffees from './views/ItemSelection/Drinks/ColdCoffees';
import IcedTeas from './views/ItemSelection/Drinks/IcedTeas';
import ColdDrinks from './views/ItemSelection/Drinks/ColdDrinks';
import HotBreakfast from './views/ItemSelection/Food/HotBreakfast';
import OatmealYogurt from './views/ItemSelection/Food/OatmealYogurt';
import Bakery from './views/ItemSelection/Food/Bakery';
import Lunch from './views/ItemSelection/Food/Lunch';
import SnacksSweets from './views/ItemSelection/Food/SnacksSweets';
import WholeBean from './views/ItemSelection/HomeCoffee/WholeBean';
import ViaInstant from './views/ItemSelection/HomeCoffee/ViaInstant';
import ColdCups from './views/ItemSelection/Merchandise/ColdCups';
import Tumblers from './views/ItemSelection/Merchandise/Tumblers';

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
        <Route path='/account/settings/privacy' element={<SettingsPrivacy/>}/>
        <Route path='/home' element={<HomeLogin/>} />
        <Route path='/account/personal' element={<PersonalInfo />} />
        <Route path='/menu/drinks/hot-coffees' element={<HotCoffees/>} />
        <Route path='/menu/drinks/hot-teas' element={<HotTeas/>} />
        <Route path='/menu/drinks/hot-drinks' element={<HotDrinks/>} />
        <Route path='/menu/drinks/frappacino' element={<Frappacino/>} />
        <Route path='/menu/drinks/cold-coffees' element={<ColdCoffees/>}/>
        <Route path='/menu/drinks/iced-teas' element={<IcedTeas/>}/>
        <Route path='/menu/drinks/cold-drinks' element={<ColdDrinks/>}/>
        <Route path='/menu/food/hot-breakfast' element={<HotBreakfast/>}/>
        <Route path='/menu/food/oatmeal-yogurt' element={<OatmealYogurt/>}/>
        <Route path='/menu/food/bakery' element={<Bakery/>}/>
        <Route path='/menu/food/lunch' element={<Lunch/>}/>
        <Route path='/menu/food/snacks-sweets' element={<SnacksSweets/>}/>
        <Route path='/menu/at-home-coffee/whole-bean' element={<WholeBean/>}/>
        <Route path='/menu/at-home-coffee/via-instant' element={<ViaInstant/>}/>
        <Route path='/menu/merchandise/cold-cups' element={<ColdCups/>}/>
        <Route path='/menu/merchandise/tumblers' element={<Tumblers/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
