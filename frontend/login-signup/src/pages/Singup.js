import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Home from "../pages/Home"

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // React Router hook for navigation

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/signup', { name, email, password });
            alert('User registered successfully!');

            // if(name){
            //   return <Home name={name}/>
            // }
            // Redirect to Login page after successful signup
            navigate('/login');
        } catch (error) {
            alert(error.response.data.error || 'An error occurred');
        }
    };

    const goToLogin = () => {
        navigate('/login'); // Navigate to Login page
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSignup} className="bg-white p-6 rounded shadow-md">
                <h2 className="text-xl font-bold mb-4 ml-[600px]">Signup</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                />
                <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded mb-4 w-[50%] ml-[280px]">
                    Signup
                </button>
                <button
                    type="button"
                    onClick={goToLogin}
                    className="bg-blue-500 text-white py-2 px-4 rounded w-[50%] ml-[280px]"
                >
                    Go to Login
                </button>
            </form>
        </div>
    );
};

export default Signup;
