import React from 'react';
import { Recycle, ChevronDown } from 'lucide-react';

const Navigation = () => (
  <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center">
          <Recycle className="h-8 w-8 text-primary-600" />
          <span className="ml-2 text-xl font-extrabold tracking-tight text-gray-900">SAIDA S.A. E.S.P.</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#why-us" className="text-gray-700 hover:text-primary-600 font-medium">Why SAIDA S.A. E.S.P.?</a>
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-primary-600 font-medium">
              Solutions <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-primary-600 font-medium">
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>
          <a href="#resources" className="text-gray-700 hover:text-primary-600 font-medium">Resources</a>
          <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium">Contact Us</a>
          <button className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition font-semibold">
            Request a Quote
          </button>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;
