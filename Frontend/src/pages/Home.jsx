import React from 'react';
import { Link } from 'react-router-dom';
import { FiPackage, FiTrendingUp } from 'react-icons/fi';

function Home() {
  return (
    <div className="flex flex-col justify-center items-center p-12 bg-slate-300">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to StockMaster
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A comprehensive stock management system for modern businesses
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 ease-in-out duration-300">
          <FiPackage className="h-12 w-12 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Inventory Management</h2>
          <p className="text-gray-600">
            Track your stock levels in real-time with advanced inventory management tools
          </p>
        </div>




        <div className="bg-white p-6 rounded-lg shadow-md hover:scale-105 ease-in-out duration-300">
          <FiTrendingUp className="h-12 w-12 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Analytics & Reports</h2>
          <p className="text-gray-600">
            Get insights into your inventory with detailed analytics and reports
          </p>
        </div>
      </div>

      <div className="text-center hover:scale-110 ease-in-out duration-300">
        <Link
          to="/login"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Home;