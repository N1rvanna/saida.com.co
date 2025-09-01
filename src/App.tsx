import React from 'react';
import { Recycle, Ambulance, Home, ChevronDown, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, ArrowRight, LeafyGreen, Factory } from 'lucide-react';

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

const Hero = () => (
  <div className="relative h-screen hero-pattern">
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1591193443107-f2c1c75d1d9a?auto=format&fit=crop&q=80"
        alt="Waste Management Facility"
        className="w-full h-full object-cover filter brightness-[0.3]"
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

const Solutions = () => (
  <div className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Comprehensive Waste Solutions</h2>
        <p className="text-lg text-gray-600">Tailored waste management services for every sector, ensuring environmental compliance and sustainability.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: Ambulance, title: 'Medical Waste Management', desc: 'Safe disposal of clinical and biohazardous materials' },
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

const Contact = () => (
  <div className="py-24 bg-white" id="contact">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold mb-4">Let's Talk Sustainability</h2>
          <p className="text-lg text-gray-600 mb-8">Get in touch with our waste management experts to discuss your specific needs and requirements.</p>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"></textarea>
            </div>
            <button className="bg-primary-600 text-white px-8 py-3 rounded-full hover:bg-primary-700 transition font-semibold w-full md:w-auto">
              Send Message
            </button>
          </form>
        </div>
        <div>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Call Us</p>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Email Us</p>
                  <p className="font-medium">contact@saidaesp.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Visit Us</p>
                  <p className="font-medium">123 Business Street, City, Country</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-100 p-3 rounded-lg hover:bg-primary-100 transition group">
                  <Facebook className="h-5 w-5 text-gray-600 group-hover:text-primary-600" />
                </a>
                <a href="#" className="bg-gray-100 p-3 rounded-lg hover:bg-primary-100 transition group">
                  <Twitter className="h-5 w-5 text-gray-600 group-hover:text-primary-600" />
                </a>
                <a href="#" className="bg-gray-100 p-3 rounded-lg hover:bg-primary-100 transition group">
                  <Linkedin className="h-5 w-5 text-gray-600 group-hover:text-primary-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => (
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

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Solutions />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;