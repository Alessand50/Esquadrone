import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl text-navy">O que dizem nossos clientes</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-gray-50 p-8 rounded-xl relative border border-gray-100">
              <Quote className="absolute top-8 right-8 text-cyan/20 w-10 h-10" />
              <p className="text-graphite italic mb-6 relative z-10 leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm">{t.author}</h4>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{t.role}</p>
                  <p className="text-xs text-cyan">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};