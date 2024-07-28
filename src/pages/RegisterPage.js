import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your registration logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-2 border border-solid border-black rounded"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-2 border border-solid border-black rounded"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#451614] text-white p-2 rounded-lg hover:bg-[#755C48] transition"
                    >
                        Register
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Already have an account?{' '}
                    <Link to="/login" className="text-[#451614;] hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
