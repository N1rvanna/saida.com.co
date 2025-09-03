import React, { lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';

const Solutions = lazy(() => import('./components/Solutions'));
const Stats = lazy(() => import('./components/Stats'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Suspense fallback={<div />}> 
        <Solutions />
      </Suspense>
      <Suspense fallback={<div />}> 
        <Stats />
      </Suspense>
      <Suspense fallback={<div />}> 
        <Contact />
      </Suspense>
      <Suspense fallback={<div />}> 
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
