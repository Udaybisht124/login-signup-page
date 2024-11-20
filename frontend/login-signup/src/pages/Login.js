import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // React Router hook for navigation

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', 
                { email, password });

            // Simulate saving the token to local storage or context
            localStorage.setItem('token', response.data.token);

            // Redirect to Home component
            navigate('/home');
        } catch (error) {
            alert(error.response.data.error || 'An error occurred');
        }
    };
    const goToSignup = () => {
        navigate('/'); // Navigate to Login page
    };
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
                <h2 className="text-xl font-bold mb-4 ml-[370px]">Login</h2>
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
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-[50%] ml-44 mt-4">
                    Login
                </button>
                <button onClick={goToSignup} type="submit" className="bg-green-500 text-white py-2 px-4 rounded mb-4 w-[50%] ml-44 mt-4">
                    Signup
                </button>
            </form>
        </div>
    );
};

export default Login;
