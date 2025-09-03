import React from 'react';
import { Recycle } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center mb-6">
            <Recycle className="h-8 w-8 text-primary-500" />
            <span className="ml-2 text-xl font-bold">SAIDA S.A. E.S.P.</span>
          </div>
          <p className="text-gray-400">Pioneering sustainable waste management solutions for a cleaner, greener future.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-primary-500 transition">About Us</a></li>
            <li><a href="#" className="hover:text-primary-500 transition">Services</a></li>
            <li><a href="#" className="hover:text-primary-500 transition">Solutions</a></li>
            <li><a href="#" className="hover:text-primary-500 transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-6">Services</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-primary-500 transition">Medical Waste</a></li>
            <li><a href="#" className="hover:text-primary-500 transition">Industrial Waste</a></li>
            <li><a href="#" className="hover:text-primary-500 transition">Municipal Waste</a></li>
            <li><a href="#" className="hover:text-primary-500 transition">Recycling</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-6">Legal</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-primary-500 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-primary-500 transition">Terms of Service</a></li>
            <li><a href="#" className="hover:text-primary-500 transition">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; 2024 SAIDA S.A. E.S.P. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
