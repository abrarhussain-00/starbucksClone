import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import woohooImage from "../../assets/giftcardImg/woohoo.png";
import crushingItImage from "../../assets/giftcardImg/crushingit.png";
import greatWork from '../../assets/giftcardImg/greatwork.png'
import sendingVibes from '../../assets/giftcardImg/sendingvibes.png'
import thankYou from '../../assets/giftcardImg/thankyou.png'
import thankYouTwo from '../../assets/giftcardImg/thankyou2.png'
import BirthdayOne from '../../assets/BirthdayCards/Birthday1.png'
import BirthdayTwo from '../../assets/BirthdayCards/birthdaytwo.png'
import BirthdayThree from '../../assets/BirthdayCards/birthday3.png'
import Birthdayfour from '../../assets/BirthdayCards/birthday4.png'
import BirthdayFive from '../../assets/BirthdayCards/birthday5.png'
import Mytreat from '../../assets/ThankyouCards/mytreat.png'
import ThankGoodness from '../../assets/ThankyouCards/ThankGooddness.webp'
import ThisonMe from '../../assets/ThankyouCards/ThisOnMe.webp'
import Greatwork from '../../assets/Workplace/Greatwork.png'
import GreatworkTwo from '../../assets/Workplace/Greatwork2.png'
import GreatworkThree from '../../assets/Workplace/Greatwork3.png'
import GreatworkFour from '../../assets/Workplace/Greatworkfour.png'
import GreatworkFive from '../../assets/Workplace/Greatwork5.png'
import Affection from '../../assets/Affection/Affection.png'
import AffectionTwo from '../../assets/Affection/affection2.avif'
import AffectionThree from '../../assets/Affection/affection3.webp'
import AffectionFour from '../../assets/Affection/affection4.avif'
import AffectionFive from '../../assets/Affection/affection5.png'

const Carousel = () => {

    const settings = {
        dots: true,
        centerMode: true,
        infinite: true,
        slidesToShow: 4,
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

    const birthday = [{

        image: BirthdayOne,
        alt: "Birthday",
    },
    {
        image: BirthdayTwo,
        alt: "Birthday",
    },
    {
        image: BirthdayThree,
        alt: "Birthday",
    },
    {
        image: Birthdayfour,
        alt: "Birthday",
    },
    {
        image: BirthdayFive,
        alt: "Birthday",
    },
    ]

    const thankYouCards = [{
        image: Mytreat,
        alt: "thank you",
    },
    {
        image: thankYou,
        alt: "thank you",
    },
    {
        image: thankYouTwo,
        alt: "Birthday",
    },
    {
        image: ThankGoodness,
        alt: "Birthday",
    },
    {
        image: ThisonMe,
        alt: "Birthday",
    },
    ]

    const workplace = [{
        image: Greatwork,
        alt: "Great work",
    },
    {
        image: GreatworkTwo,
        alt: "Great work",
    },
    {
        image: GreatworkThree,
        alt: "Great work",
    },
    {
        image: GreatworkFour,
        alt: "Great work",
    },
    {
        image: GreatworkFive,
        alt: "Great work",
    },
    ]

    const affection = [
        {
            image: Affection,
            alt: "Affection",
        },
        {
            image: AffectionTwo,
            alt: "Affection",
        },
        {
            image: AffectionThree,
            alt: "Affection",
        },
        {
            image: AffectionFour,
            alt: "Affection",
        },
        {
            image: AffectionFive,
            alt: "Affection",
        },
    ]
    return (
        <div>
            <div className='mt-10'>
                <div className='text-start px-5 md:px-14'>
                    <h1 className='font-semibold text-[20px] md:text-[22px] py-3'>Featured</h1>
                </div>
            <Slider {...settings}>
                {featuredGiftCards.map((card, index) => (
                    <div key={index} className='flex justify-center items-center'>
                        <img src={card.image} alt={card.alt} width={290} style={{ borderRadius: '8px' }} />
                    </div>
                ))}
            </Slider>
            </div>
            <div className='mt-10'>
                <div className='text-start px-5 md:px-14'>
                    <h1 className='font-semibold text-[20px] md:text-[22px] py-3'>Birthday</h1>
                </div>
                <Slider {...settings}>
                    {birthday.map((card, index) => (
                        <div key={index} className='flex justify-center items-center'>
                            <img src={card.image} alt={card.alt} width={290} style={{ borderRadius: '8px' }} />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className='mt-10'>
                <div className='text-start px-5 md:px-14'>
                    <h1 className='font-semibold text-[20px] md:text-[22px] py-3'>Thank You</h1>
                </div>
                <Slider {...settings}>
                    {thankYouCards.map((card, index) => (
                        <div key={index} className='flex justify-center items-center'>
                            <img src={card.image} alt={card.alt} width={290} style={{ borderRadius: '8px' }} />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className='mt-10'>
                <div className='text-start px-5 md:px-14'>
                    <h1 className='font-semibold text-[20px] md:text-[22px] py-3'>Affection</h1>
                </div>
                <Slider {...settings}>
                    {affection.map((card, index) => (
                        <div key={index} className='flex justify-center items-center'>
                            <img src={card.image} alt={card.alt} width={290} style={{ borderRadius: '8px' }} />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className='mt-10'>
                <div className='text-start px-5 md:px-14'>
                    <h1 className='font-semibold text-[20px] md:text-[22px] py-3'>Great Work</h1>
                </div>
                <Slider {...settings}>
                    {workplace.map((card, index) => (
                        <div key={index} className='flex justify-center items-center'>
                            <img src={card.image} alt={card.alt} width={290} style={{ borderRadius: '8px' }} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>


    );
};

export default Carousel;







