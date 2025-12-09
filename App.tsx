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
      <main className="container mx-auto px-4">
        <section className="hero-section mb-12">
          <Hero />
        </section>

        <section className="categories-section mb-12">
          <Categories />
        </section>

        <section className="featured-pilots-section mb-12">
          <FeaturedPilots />
        </section>

        <section className="how-it-works-section mb-12">
          <HowItWorks />
        </section>

        <section className="trust-section mb-12">
          <TrustSection />
        </section>

        <section className="testimonials-section mb-12">
          <Testimonials />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
