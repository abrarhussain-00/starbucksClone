import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import woohooImage from "../../assets/giftcardImg/woohoo.png";
import crushingItImage from "../../assets/giftcardImg/crushingit.png";
import greatWork from '../../assets/giftcardImg/greatwork.png'
import sendingVibes from '../../assets/giftcardImg/sendingvibes.png'
import thankYou from '../../assets/giftcardImg/thankyou.png'
import thankYouTwo from '../../assets/giftcardImg/thankyou2.png'

const Carousel = () => {

    const settings = {
        dots: true,
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };

    const featuredGiftCards = [
        {
            image: woohooImage,
            alt: "Woohoo",
        },
        {
            image: crushingItImage,
            alt: "Thank you a ton",
        },
        {
            image: greatWork,
            alt: "Thank you a ton",
        },
        {
            image: sendingVibes,
            alt: "Thank you a ton",
        },
        {
            image: thankYou,
            alt: "Thank you a ton",
        },
        {
            image: thankYouTwo,
            alt: "Thank you a ton",
        },

    ];
    return (
        <Slider {...settings}>
            {featuredGiftCards.map((card, index) => (
                <div key={index} className='flex justify-center items-center'>
                    <img src={card.image} alt={card.alt} width={290} style={{ borderRadius: '8px' }} />
                </div>
            ))}
        </Slider>

    );
};

export default Carousel;







