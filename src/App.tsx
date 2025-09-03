import React, { Suspense } from 'react';
import { Recycle, ChevronDown, ArrowRight } from 'lucide-react';

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

const Solutions = React.lazy(() => import('./components/Solutions'));
const Stats = React.lazy(() => import('./components/Stats'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));
const Loader = <div className="text-center py-10">Loading...</div>;

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Suspense fallback={Loader}>
        <Solutions />
      </Suspense>
      <Suspense fallback={Loader}>
        <Stats />
      </Suspense>
      <Suspense fallback={Loader}>
        <Contact />
      </Suspense>
      <Suspense fallback={Loader}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
