import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Details from '../components/HomeLogin/Details';

const HomeLogin = () => {
    const navigate = useNavigate();
    const id = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const userData = () => {
        axios
            .post('http://localhost:8000/api/login/users', {
                firstName,
                lastName,
            })
            .then((res) => {
                localStorage.setItem('firstName', JSON.stringify(res.data.firstName));
                localStorage.setItem('lastName', JSON.stringify(res.data.lastName));
                console.log(localStorage.lastName);
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='relative bg-white font-semibold text-[32px] p-20 text-center'>
                Good Afternoon, <br />
                {localStorage.firstName} ☀️
            </div>
            <div className='flex flex-col w-[60%] items-center justify-start space-y-6 bg-[rgb(249,249,249)] overflow-y-auto h-screen'>
                <br />
                <div className='bg-white rounded-lg shadow p-4'>
                    <img
                        src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83790.jpg'
                        alt='Drinks'
                        className='w-[300px]'
                    />
                    <div className='mt-2'>
                        Quench your thirst with a cool refresher!
                        <br />
                        <br />
                        <a
                            href='/menu'
                            className='bg-green-800 text-white px-4 py-2 rounded-md'
                        >
                            Order Now
                        </a>
                    </div>
                </div>
                <div className='bg-white rounded-lg shadow p-4'>
                    <img
                        src='https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00762111206039/27bac33b8396be3f6d7ae1417dafb33c_large.png&width=512&type=webp&quality=90'
                        alt='Card Image 2'
                        className='w-[300px] h-[300px]'
                    />
                    <div className='mt-2'>
                        Buy home coffee now!
                        <br />
                        <br />
                        <a
                            href='/menu'
                            className='bg-green-800 text-white px-4 py-2 rounded-md'
                        >
                            Shop Now
                        </a>
                    </div>
                </div>
                <div className='bg-white rounded-lg shadow p-4'>
                    <img
                        src='https://globalassets.starbucks.com/assets/012cdfb74d294be28ca6604768408c4b.jpg?impolicy=1by1_tight_288'
                        alt='Card Image 3'
                        className='w-[300px]'
                    />
                    <div className='mt-2'>
                        Lunch break? Stop buy and get a bite!
                        <br />
                        <br />
                        <a
                            href='/menu'
                            className='bg-green-800 text-white px-4 py-2 rounded-md'
                        >
                            Shop Now
                        </a>
                    </div>
                </div>
                <div className='bg-white rounded-lg shadow p-4'>
                    <img
                        src='https://globalassets.starbucks.com/assets/DE5CA7E70E034D19A392B06ABD88B306.jpg?impolicy=1by1_tight_288'
                        alt='Card Image 3'
                        className='w-[300px]'
                    />
                    <div className='mt-2'>
                        Show your Starbucks love and shop for our &ensp; <br /> merchandise now!
                        <br />
                        <br />
                        <a
                            href='/menu'
                            className='bg-green-800 text-white px-4 py-2 rounded-md'
                        >
                            Shop Now
                        </a>
                    </div>
                </div>
                <div className='bg-white rounded-lg shadow p-4'>
                    <img
                        src='https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00076750087066/0dde95da99e9bb45a50cea7e180e6431_large.png&width=512&type=webp&quality=90'
                        alt='Card Image 3'
                        className='w-[300px]'
                    />
                    <div className='mt-2'>
                        Surprise your friend with a Starbucks giftcard!
                        <br />
                        <br />
                        <a
                            href='/menu'
                            className='bg-green-800 text-white px-4 py-2 rounded-md'
                        >
                            Shop Now
                        </a>
                    </div>
                </div>
                <br />
            </div>
        </div>
    );
};

export default HomeLogin;
