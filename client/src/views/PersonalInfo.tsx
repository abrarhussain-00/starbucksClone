import React, { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const PersonalInfo = () => {
    const navigate = useNavigate();
    const id = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <div className='flex flex-col md:flex-row'>
            <div className=' relative bg-white font-semibold text-[32px] p-20 text-center md:w-1/3'>
                <h1 className='font-semibold text-[32px]'>Welcome, <br />{localStorage.firstName} ☀️</h1>
            </div>
            <div className="flex flex-col w-[100%] items-center justify-center space-y-6 bg-[rgb(249,249,249)]">
                <div>
                    <br /><br />
                    <div className="bg-[rgb(249,249,249)] ">
                        <div className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mx-auto">
                            <p style={{ fontSize: '25px', fontWeight: 'bolder', textAlign: 'center', marginBottom: '1rem' }}>
                                View account Details
                            </p>
                            <label className="block text-gray-500 text-sm font-bold mb-2" style={{ textAlign: 'center' }}>
                                STARBUCKS® REWARDS
                            </label>
                            <p style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '1rem' }}>
                                Personal Information
                            </p>
                            <div className='text-start'>
                                <div className="mb-4">
                                    <label className="text-start text-gray-700">
                                        First Name: {localStorage.firstName}
                                    </label>
                                </div>
                                <div className="mb-4">
                                    <label className="text-start text-gray-700">
                                        Last Name: {localStorage.lastName}
                                    </label>
                                </div>
                                <div className="mb-4">
                                    <label className="text-start text-gray-700">
                                        Username/Email: {localStorage.email}
                                    </label>
                                </div>
                                <div className="mb-4">
                                    <label className="text-start text-gray-700">
                                        Phone Number: {localStorage.phoneNumber}
                                    </label>
                                </div>
                            </div>

                            <p style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'left', marginBottom: '1rem' }}>
                                Account Security
                            </p>

                            <p style={{ textAlign: 'left' }}>Do not share login info, you will not be able to change!</p>
                            <br />
                        </div>
                    </div>
                    <br /><br /><br /><br />
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo
