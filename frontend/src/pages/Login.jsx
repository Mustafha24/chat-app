import React, { useState } from 'react';
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
const Login = () => {
  const [userName, setuserName] = useState('');
  const [password, setPassword] = useState('');

  const handleuserNameChange = (e) => {
    setuserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(userName, password);
	};


  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full bg-transparent rounded-lg shadow-2xl overflow-hidden backdrop-filter backdrop-blur-lg">
        <div className="py-8 px-10">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Sign in to your account</h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  className="appearance-none  relative block w-full px-3 py-3 border border-gray-200 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={userName}
                  onChange={handleuserNameChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-200 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="text-xl text-gray-900">Don't have an account? <Link to="/SignUp" className="font-large text-indigo-600 hover:text-indigo-700">Sign up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
