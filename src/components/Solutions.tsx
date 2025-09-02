import React from 'react';
import { Guitar as Hospital, Factory, Home, LeafyGreen } from 'lucide-react';

const Solutions = () => (
  <div className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Comprehensive Waste Solutions</h2>
        <p className="text-lg text-gray-600">Tailored waste management services for every sector, ensuring environmental compliance and sustainability.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: Hospital, title: 'Medical Waste Management', desc: 'Safe disposal of clinical and biohazardous materials' },
          { icon: Factory, title: 'Industrial Solutions', desc: 'Custom programs for manufacturing and processing facilities' },
          { icon: Home, title: 'Municipal Services', desc: 'Efficient collection and processing for communities' },
          { icon: LeafyGreen, title: 'Green Initiatives', desc: 'Sustainable recycling and composting programs' }
        ].map((solution, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition group cursor-pointer border border-gray-100"
          >
            <div className="bg-primary-50 p-3 rounded-lg w-fit group-hover:bg-primary-100 transition">
              <solution.icon className="h-8 w-8 text-primary-600 group-hover:scale-110 transition" />
            </div>
            <h3 className="text-xl font-semibold mt-6 mb-4">{solution.title}</h3>
            <p className="text-gray-600">{solution.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Solutions;
