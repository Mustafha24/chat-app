import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import useSignup from "../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const correctedValue = type === 'checkbox' ? checked : value;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: correctedValue
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
    console.log(inputs)
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-transparent rounded-lg shadow-2xl overflow-hidden backdrop-filter backdrop-blur-lg">
        <div className="py-8 px-10">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Sign up for an account</h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label htmlFor="fullName" className="sr-only">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="fullName"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-300"
                  placeholder="Full Name"
                  value={inputs.fullName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="userName" className="sr-only">userName</label>
                <input
                  id="userName"
                  name="userName"
                  type="text"
                  autoComplete="userName"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-300"
                  placeholder="userName"
                  value={inputs.userName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-300"
                  placeholder="Password"
                  value={inputs.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                <input
                  id="confirm-password"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-200 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm transition duration-300"
                  placeholder="Confirm Password"
                  value={inputs.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              <div className='py-2'>
                <span className="block mb-2 text-lg font-medium text-gray-900">Gender</span>
                <div className="flex items-center">
                  <input
                    id="male"
                    name="gender"
                    type="radio"
                    value="male"
                    className="mr-2 focus:ring-indigo-500 text-indigo-600"
                    checked={inputs.gender === "male"}
                    onChange={handleChange}
                  />
                  <label htmlFor="male" className="mr-6">Male</label>
                  <input
                    id="female"
                    name="gender"
                    type="radio"
                    value="female"
                    className="mr-2 focus:ring-indigo-500 text-indigo-600"
                    checked={inputs.gender === "female"}
                    onChange={handleChange}
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </div>
            <div className='my-3'>
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
              >
                Sign up
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="text-xl text-gray-900">Don't have an account? <Link to="/login" className="font-large text-indigo-600 hover:text-indigo-700">Sign up</Link></p>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default SignUp;
