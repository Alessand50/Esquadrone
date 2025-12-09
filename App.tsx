import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { FeaturedPilots } from './components/FeaturedPilots';
import { HowItWorks } from './components/HowItWorks';
import { TrustSection } from './components/TrustSection';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-graphite selection:bg-cyan selection:text-white">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedPilots />
        <HowItWorks />
        <TrustSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;