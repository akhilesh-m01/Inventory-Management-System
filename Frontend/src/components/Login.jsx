import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';

function Login() {
  const [userType, setUserType] = useState('client');

  return (
    <div className="max-w-md mx-auto my-10 bg-slate-300 p-8 rounded-lg hover:shadow-blue-400 shadow-md ">
      <div className="flex justify-center mb-6">
        <FiLogIn className="h-12 w-12 text-blue-600" />
      </div>
      
      <h2 className="text-2xl font-bold text-center mb-8">Login to StockMaster</h2>
      
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg ${
            userType === 'organization'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700'
          }`}
          onClick={() => setUserType('organization')}
        >
          Organization
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            userType === 'client'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700'
          }`}
          onClick={() => setUserType('client')}
        >
          Client
        </button>
      </div>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
          <p className='text-sm text-blue-500 hover:underline cursor-pointer'>Forgot password?</p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Login
        </button>
      </form>

      <p className="text-center mt-4 text-sm text-gray-600">
        Don't have an account?{' '}
        <a href="#" className="text-blue-600 hover:underline">
          Sign up
        </a>
      </p>
    </div>
  );
}

export default Login;