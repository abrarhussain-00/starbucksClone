import React, { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const PersonalInfo = () => {
    const { id } = useParams()
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleFirstnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    };

    const handleLastnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    useEffect(() => {
        axios.get(`http://localhost:8000/api/login/users/${id}`)
            .then(res => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setEmail(res.data.email);
                setPassword(res.data.password);
                console.log(res.data.firstName)
            })
            .catch(err => {
                console.log(err, "error occured")
            })
    })

    const handleUpdate = (event: React.FormEvent) => {
        event.preventDefault();
        const updateUser = {
            firstName,
            lastName,
            email,
            password
        }
        axios.put(`http://localhost:8000/api/login/users/${id}`, updateUser) 
            .then(() => {
            })
            .catch((err) => console.error(err));
    }

    // const postRegistrationDetails = () => {
    //     axios
    //         .put(`http://localhost:8000/api/login/users/${id}`, {
    //             firstName,
    //             lastName,
    //             email,
    //             password,
    //         })
    //         .then((res) => {
    //             localStorage.setItem('userId', JSON.stringify(res.data.id));
    //             localStorage.setItem('firstName', JSON.stringify(res.data.firstName));
    //             localStorage.setItem('lastName', JSON.stringify(res.data.lastName));
    //             localStorage.setItem('password', JSON.stringify(res.data.password));
    //             setUserLoggedIn(true); // Set the login status
    //             navigate(`/home`);
    //             window.location.assign("/home");
    //         })
    //         .catch((err) => console.error(err));
    // };


    // const handleSubmit = async (event: React.FormEvent) => {
    //     event.preventDefault();
    //     postRegistrationDetails();
    //     console.log({ firstName, lastName, email, password });
    //     setFirstName("");
    //     setLastName("");
    //     setEmail("");
    //     setPassword("");
    // };

    return (

        <div className='flex w-full items-center justify-center'>
            <div className='w-[40%] h-[200px] flex justify-center items-center'>
                <h1 className='font-semibold text-[32px]'>Good Afternoon, <br />{localStorage.firstName} ☀️</h1>
            </div>
            <div className="flex flex-col w-[60%] items-center justify-center  space-y-6 bg-[rgb(249,249,249)]">
                <br />
                <div>
                    <br /><br /><br /><br />
                    <div className="flex justify-center items-center">
                        <div className="max-w-md w-full bg-white shadow-md rounded px-8 pt-6 pb-8">
                            <p style={{ fontSize: '25px', fontWeight: 'bolder', textAlign: 'center', marginBottom: '1rem' }}>
                                View account Details
                            </p>
                            <label className="block text-gray-500 text-sm font-bold mb-2" style={{ textAlign: 'center' }}>
                                STARBUCKS® REWARDS
                            </label>
                            <label className="block text-gray-500 text-sm  mb-2" style={{ textAlign: 'center', marginBottom: '2rem' }}>
                                Edit Account Information
                            </label>
                            <form onSubmit={handleUpdate}>
                                <label className="block text-gray-700 text-sm font-bold mb-2" style={{ textAlign: 'left' }}>
                                    * indicates required field
                                </label>
                                <br />
                                <p style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '1rem' }}>
                                    Personal Information
                                </p>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="*First name"
                                        value={firstName}
                                        onChange={handleFirstnameChange}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="*Last name"
                                        value={lastName}
                                        onChange={handleLastnameChange}
                                        required
                                    />
                                </div>
                                <p style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '1rem' }}>
                                    Account Security
                                </p>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="*Email address"
                                        value={email}
                                        onChange={handleEmailChange}
                                        required
                                    />
                                </div>
                                <p style={{ textAlign: 'left' }}>This will be your username</p>
                                <br />
                                <div className="mb-6">
                                    <div className="relative">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            placeholder="*Password"
                                            value={password}
                                            onChange={handlePasswordChange}
                                            required
                                        />
                                        <button
                                            type="button"
                                            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                                            onClick={handleTogglePasswordVisibility}
                                        >
                                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                                        </button>
                                    </div>
                                </div>
                                <br /><br />
                                <div className="flex items-center justify-end">
                                    <button
                                        type="submit"
                                        className="text-green-700 font-bold py-2 px-4 rounded border border-green-700 focus:outline-none focus:shadow-outline"
                                        style={{ backgroundColor: 'green', color: 'white' }}
                                    >
                                        Update account
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <br /><br /><br /><br />
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo
