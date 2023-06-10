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
import CaramelMach from './views/Cart/Drinks/CaramelMach';
import ChiTeaLatte from './views/Cart/Drinks/ChiTeaLatte';
import HotChocolate from './views/Cart/Drinks/HotChocolate';
import ChocolateJava from './views/Cart/Drinks/ChocolateJava';
import ColdCupsCheck from './views/Cart/Merchandise/ColdCupsCheck';
import TumblersCheck from './views/Cart/Merchandise/TumblersCheck';
import WholeBeanCheck from './views/Cart/HomeCoffee/WholeBeanCheck';
import ViaInstantCheck from './views/Cart/HomeCoffee/ViaInstantCheck';
import HotBreakFastCheck from './views/Cart/Food/HotBreakFastCheck';
import OatMealYogurtCheck from './views/Cart/Food/OatMealYogurtCheck';
import BakeryCheck from './views/Cart/Food/BakeryCheck';
import LunchCheck from './views/Cart/Food/LunchCheck';
import SnacksSweetsCheck from './views/Cart/Food/SnacksSweetsCheck';
import ColdDrinkCheck from './views/Cart/Drinks/ColdDrinkCheck';
import IcedDrinksCheck from './views/Cart/Drinks/IcedTeasCheck';
import ColdCoffeesCheck from './views/Cart/Drinks/ColdCoffeesCheck';

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
        <Route path='/menu/product/0015/hot-coffees' element={<CaramelMach/>}/>
        <Route path='/menu/drinks/caramel-macchiato' element={<ChiTeaLatte/>}/>
        <Route path='/menu/drinks/hot-chocolate' element={<HotChocolate/>}/>
        <Route path='/menu/drinks/chocolate-java-mint-Frappuccino' element={<ChocolateJava/>}/>
        <Route path='/menu/merchandise/cold-cups/check' element={<ColdCupsCheck/>}/>
        <Route path='/menu/merchandise/tumblers/check' element={<TumblersCheck/>}/>
        <Route path='/menu/home-coffee/whole-bean' element={<WholeBeanCheck/>}/>
        <Route path='/menu/home-coffee/via-instant' element={<ViaInstantCheck/>}/>
        <Route path='/menu/food/hot-breakfast/check' element={<HotBreakFastCheck/>}/>
        <Route path='/menu/food/oat-meal-yogurt/check' element={<OatMealYogurtCheck/>}/>
        <Route path='/menu/food/bakery/check' element={<BakeryCheck/>}/>
        <Route path='/menu/food/lunch/check' element={<LunchCheck/>}/>
        <Route path='/menu/food/snacks-sweets/check' element={<SnacksSweetsCheck/>}/>
        <Route path='/menu/drinks/cold-drinks/check' element={<ColdDrinkCheck/>}/>
        <Route path='/menu/drinks/iced-teas/check' element={<IcedDrinksCheck/>} />
        <Route path='/menu/drinks/cold-coffees/check' element={<ColdCoffeesCheck/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
