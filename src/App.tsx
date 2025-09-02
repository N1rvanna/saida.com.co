import React, { Suspense, lazy } from 'react';

const Navigation = lazy(() => import('./components/Navigation'));
const Hero = lazy(() => import('./components/Hero'));
const Solutions = lazy(() => import('./components/Solutions'));
const Stats = lazy(() => import('./components/Stats'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />
        <Hero />
        <Solutions />
        <Stats />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
