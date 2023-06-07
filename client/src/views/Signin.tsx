import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError(''); // Clear any previous error messages

    // Check if the email field is empty
    if (!username.trim()) {
      setError('Please enter your email address');
      return;
    }

    // Check if the password field is empty
    if (!password.trim()) {
      setError('Please enter your password');
      return;
    }

    // Call the asynchronous function for sign-in
    signIn();
  };

  const signIn = async () => {
    try {
      // Send a request to the server to verify the username and password
      const response = await axios.post('http://localhost:8000/api/login', {
        email: username,
        password: password,
      });

      // Check if the sign-in was successful
      if (response.status === 200) {
        // TODO: Handle successful sign-in, such as storing user data in local storage
        console.log(response.data);
        navigate('/welcome'); // Redirect to the welcome page
      } else {
        setError('Invalid username or password');
      }
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        setError('Invalid username or password');
      } else {
        setError('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div>
      <br /><br /><br /><br />
      <div className="flex justify-center items-center">
        <div className="max-w-md w-full bg-white shadow-md rounded px-8 pt-6 pb-8">
          <p style={{ fontSize: '25px', fontWeight: 'bolder', textAlign: 'center', marginBottom: '1rem' }}>
            Sign in or create an account
          </p>
          {error && (
            <div className="text-red-500 text-sm font-bold mb-2" style={{ textAlign: 'center' }}>
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              * indicates required field
            </label>
            <br />
            <div className="mb-4">
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="*Username or email address"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
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
            <div className="flex items-center justify-start mb-4">
              <a className="inline-block align-baseline font-bold text-sm text-green-700 hover:text-green-800" href="#">
                Forgot your username?
              </a>
            </div>
            <div className="flex items-center justify-start mb-6">
              <a className="inline-block align-baseline font-bold text-sm text-green-700 hover:text-green-800" href="#">
                Forgot your password?
              </a>
            </div>
            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="text-green-700 font-bold py-2 px-4 rounded border border-green-700 focus:outline-none focus:shadow-outline"
                style={{ backgroundColor: 'green', color: 'white' }}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex justify-center items-center mt-8">
        <p className="text-green-700">
          JOIN STARBUCKS® REWARDS:
        </p>
      </div>
      <div className="flex justify-center items-center mt-3">
        <p className="text-gray-700 text-center mx-4 md:mx-8 lg:mx-16">
          Join Starbucks® Rewards to earn free food and drinks, get free refills, pay and order with your phone, and more.
        </p>
      </div>
      <br />
      <div className="flex items-center justify-center">
        <a href="/account/create" style={{ color: 'black', display: 'flex', alignItems: 'center' }}>
          <button style={{ color: 'green', padding: '0.5rem', borderRadius: '10rem', border: '1px solid green', marginRight: '2rem', background: 'white' }}>Join Now</button>
        </a>
      </div>
      <br /><br /><br /><br />
    </div>
  );
};

export default SignIn;
