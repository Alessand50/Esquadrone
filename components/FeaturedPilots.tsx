import React from 'react';
import { FEATURED_PILOTS } from '../constants';
import { Star, CheckCircle, MapPin } from 'lucide-react';

export const FeaturedPilots: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-display font-bold text-3xl text-navy">Pilotos em Destaque</h2>
            <p className="mt-2 text-gray-600">Profissionais com as melhores avaliações da plataforma.</p>
          </div>
          <a href="#" className="hidden md:block text-cyan font-semibold hover:underline">
            Ver todos os pilotos &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_PILOTS.map((pilot) => (
            <div key={pilot.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-gray-200">
                 <img src={pilot.imageUrl} alt={pilot.name} className="w-full h-full object-cover" />
                 <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center shadow-sm">
                    <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                    <span className="text-xs font-bold text-navy">{pilot.rating}</span>
                 </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-lg text-navy">{pilot.name}</h3>
                  {pilot.verified && <CheckCircle className="w-4 h-4 text-cyan fill-current/10" />}
                </div>
                
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  {pilot.location}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {pilot.specialties.map((spec, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-600 text-[10px] uppercase font-bold px-2 py-1 rounded-sm tracking-wide">
                      {spec}
                    </span>
                  ))}
                </div>

                <button className="w-full border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold py-2 rounded-md transition-colors text-sm">
                  Ver Perfil
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <a href="#" className="text-cyan font-semibold hover:underline">
                Ver todos os pilotos &rarr;
            </a>
        </div>
      </div>
    </section>
  );
};