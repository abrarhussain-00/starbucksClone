import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Home from './Home';

const Success: React.FC = () => {
    const [firstName, setFirstName] = useState('');

    useEffect(() => {
        const storedFirstName = localStorage.getItem('firstName');
        if (storedFirstName) {
            setFirstName(JSON.parse(storedFirstName));
        }
    }, []);

    const navigate = useNavigate();


    const handleLogout = () => {
        localStorage.removeItem("userId");
        localStorage.removeItem("firstName");
        navigate("/");
    };

    return (
        <div>
            <h1 className='text-[24px] text-start px-24 font-bold'>Welcome, {firstName}!</h1>
            <Home />
        </div>
    );
};

export default Success;
