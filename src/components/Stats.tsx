import React from 'react';

const Stats = () => (
  <div className="bg-secondary-900 py-20 relative overflow-hidden">
    <div className="absolute inset-0 hero-pattern opacity-5" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="grid md:grid-cols-3 gap-12 text-center">
        {[
          { number: '500K+', label: 'Tons Processed Annually' },
          { number: '1000+', label: 'Business Clients' },
          { number: '99.9%', label: 'Environmental Compliance' }
        ].map((stat, index) => (
          <div key={index} className="bg-secondary-800/50 p-8 rounded-xl backdrop-blur-sm">
            <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
            <div className="text-primary-400 font-medium text-lg">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Stats;
