import React from 'react';
import { Link } from 'react-router-dom';
import { FiPackage, FiLayout, FiClipboard, FiLogOut } from 'react-icons/fi';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex text-2xl font-bold">
            <FiPackage className="h-8 w-8 text-blue-600 mx-2" />
            Stock Management
        </Link>
        <div>
          <Link to="/login" className="mr-4 flex hover:text-gray-300 bg-blue-600 p-2 rounded-md">
          <FiLogOut className="h-5 w-5 mx-2" />
          Login</Link>
          {/* <Link to="/client/login" className="hover:text-gray-300">Client Login</Link> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;