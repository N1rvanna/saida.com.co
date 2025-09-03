import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => (
  <div className="relative h-screen hero-pattern">
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1591193443107-f2c1c75d1d9a?auto=format&fit=crop&q=80"
        alt="Waste Management Facility"
        className="w-full h-full object-cover filter brightness-[0.3]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 to-primary-900/80" />
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
          Transforming Waste Management for a Sustainable Future
        </h1>
        <p className="text-xl text-gray-200 mb-8 font-light">
          Leading the industry with innovative solutions for responsible waste collection, recycling, and disposal. Making our world cleaner, one community at a time.
        </p>
        <button className="bg-primary-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary-700 transition flex items-center shadow-lg">
          Learn More <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
);

export default Hero;
