import React from 'react';
import { Link } from 'react-router-dom';
import { FiPackage, FiMail, FiPhone, FiMapPin, FiGithub, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FiPackage className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold text-white">StockMaster</span>
            </div>
            <p className="text-sm">
              Empowering businesses with smart inventory management solutions since 2024.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="hover:text-blue-400 transition-colors">Dashboard</Link>
              </li>
              <li>
                <Link to="/inventory" className="hover:text-blue-400 transition-colors">Inventory</Link>
              </li>
              <li>
                <Link to="/orders" className="hover:text-blue-400 transition-colors">Orders</Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-blue-400 transition-colors">Login</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FiMail className="h-5 w-5 text-blue-500" />
                <span>support@stockmaster.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiPhone className="h-5 w-5 text-blue-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiMapPin className="h-5 w-5 text-blue-500" />
                <span>123 Business Ave, Suite 100<br />Jersey Channel Island,UK</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FiInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FiTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FiLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} StockMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;