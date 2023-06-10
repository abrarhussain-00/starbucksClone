import React from "react";
import Carousel from "../components/GiftCard/Carousel";
import GiftCardFooter from "../components/GiftCard/GiftCardFooter";

const Gifts: React.FC = () => {
  return (
    <div>
      <Carousel />
      <GiftCardFooter />
    </div>
  );
};

export default Gifts;

