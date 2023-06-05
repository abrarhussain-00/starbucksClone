import Slider from "react-slick";
import Carousel from "../components/GiftCard/Carousel";
const Gifts: React.FC = () => {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <h1>Gifts</h1>
      <Carousel />
    </div>
  );
};

export default Gifts;
