import React from "react";
import Carousel from "../components/GiftCard/Carousel";
import FartherDay from "../components/GiftCard/FartherDay";


const Gifts: React.FC = () => {
  return (
    <div>
      <h1>Gifts</h1>
      <Carousel />
      <FartherDay />
    </div>
  );
};

export default Gifts;

