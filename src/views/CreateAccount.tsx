import React, { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateAccount: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailUpdate, setEmailUpdate] = useState(true);
  const [terms, setTerms] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

  const handlePhonenumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCheckboxChange = () => {
    setEmailUpdate(!emailUpdate);
  };

  const handleTermsChange = () => {
    setTerms(!terms);
  };

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setUserLoggedIn(userId ? true : false);
  }, []);

  const postRegistrationDetails = () => {
    axios
      .post("http://localhost:8000/api/login/users", {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
      })
      .then((res) => {
        localStorage.setItem('userId', JSON.stringify(res.data.id));
        localStorage.setItem('firstName', JSON.stringify(res.data.firstName));
        localStorage.setItem('lastName', JSON.stringify(res.data.lastName));
        localStorage.setItem('email', JSON.stringify(res.data.email));
        localStorage.setItem('phoneNumber', JSON.stringify(res.data.phoneNumber));

        setUserLoggedIn(true); // Set the login status
        navigate(`/home`);
        window.location.assign("/home");
      })
      .catch((err) => {
        if (err.response && err.response.status === 409) {
          setErrorMessage('Email or username is taken, please try again.');
        } else {
          setErrorMessage('An error occurred. Please try again later.');
        }
      });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMessage(''); // Clear previous error message
    postRegistrationDetails();
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhoneNumber('');
    setPassword('');
  };

  return (
    <div>
      <br /><br /><br /><br />
      <div className="flex justify-center items-center">
        <div className="max-w-md w-full bg-white shadow-md rounded px-8 pt-6 pb-8">
          <p style={{ fontSize: '25px', fontWeight: 'bolder', textAlign: 'center', marginBottom: '1rem' }}>
            Create an account
          </p>
          <label className="block text-gray-500 text-sm font-bold mb-2" style={{ textAlign: 'center' }}>
            STARBUCKS® REWARDS
          </label>
          <label className="block text-gray-500 text-sm  mb-2" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Join Starbucks Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering,
            a birthday Reward, and moremore.
          </label>
          <form onSubmit={handleSubmit}>
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
            <div className="mb-4">
              <input
                type="number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Phone Number is optional"
                value={phoneNumber}
                onChange={handlePhonenumberChange}
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
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
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
            <p style={{ textAlign: 'left' }}>
              Create a password 8 to 25 characters long that includes at least 1 uppercase and 1 lowercase letter, 1 number
              and 1 special character like an exclamation point or asterisk.
            </p>
            <br /><br />
            <div className="flex items-center justify-start mb-4">
              <a className="inline-block align-baseline font-bold text-sm text-green-700 hover:text-green-800" style={{ fontSize: '15px' }} href="#">
                Already have a starbucks giftcard?
              </a>
            </div>
            <div className="flex items-center justify-start mb-6">
              <p className="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-green-800" >
                COLLECT MORE STARS & EARN REWARDS
              </p>
            </div>
            <p style={{ textAlign: 'left' }}>
              Email is a great way to know about offers and what’s new from Starbucks.
            </p>
            <br />
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={emailUpdate}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-green-800"
              />
              <span className="text-gray-700">Yes, I’d like email from Starbucks</span>
            </label>
            <br />
            <p style={{ textAlign: 'left' }}>
              Know about initiatives, announcements and product offers.
            </p>
            <br />
            <div className="flex items-center justify-start mb-6">
              <p className="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-green-800" >
                TERMS OF USE
              </p>
            </div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={terms}
                onChange={handleTermsChange}
                className="form-checkbox h-5 w-5 text-green-800"
                required
              />
              <span className="ml-2 text-start">
                I agree to the Starbucks® Rewards Terms opens in new window and the Starbucks Card Terms opens in new window and have read the Starbucks Privacy Statement opens in new window.
              </span>
            </label>
            <br /><br />
            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="text-green-700 font-bold py-2 px-4 rounded border border-green-700 focus:outline-none focus:shadow-outline"
                style={{ backgroundColor: 'green', color: 'white' }}
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
      <br /><br /><br /><br />
    </div>
  );
};

export default CreateAccount;
