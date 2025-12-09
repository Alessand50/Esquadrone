import React from 'react';
import { Search, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-navy pt-32 pb-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan to-transparent"></div>
         {/* Abstract tech grid */}
         <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#1BA8DF 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      {/* Drone Image Overlay (Concept) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-cyan/5 rounded-full blur-3xl z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Conectamos você aos <span className="text-cyan">melhores pilotos profissionais</span> de drone.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 font-light max-w-2xl">
            Serviços verificados em todo o Brasil: inspeções, mapeamento, audiovisual, agricultura e muito mais.
          </p>

          {/* Search Box */}
          <div className="bg-white p-2 rounded-lg shadow-xl flex flex-col md:flex-row gap-2 max-w-3xl">
            <div className="flex-1 flex items-center px-4 py-3 bg-gray-50 rounded-md">
              <Search className="text-gray-400 w-5 h-5 mr-3" />
              <input 
                type="text" 
                placeholder="O que você precisa?" 
                className="bg-transparent w-full outline-none text-graphite placeholder-gray-400"
              />
            </div>
            <div className="flex-1 flex items-center px-4 py-3 bg-gray-50 rounded-md border-t md:border-t-0 md:border-l border-gray-200">
              <MapPin className="text-gray-400 w-5 h-5 mr-3" />
              <input 
                type="text" 
                placeholder="CEP ou Cidade" 
                className="bg-transparent w-full outline-none text-graphite placeholder-gray-400"
              />
            </div>
            <button className="bg-cyan hover:bg-cyan-hover text-white font-bold py-3 px-8 rounded-md transition-all shadow-md">
              Buscar
            </button>
          </div>

          {/* Chips */}
          <div className="mt-8 flex flex-wrap gap-2 text-sm text-gray-300">
            <span className="mr-2">Populares:</span>
            {['Inspeção Predial', 'Casamentos', 'Topografia', 'Imobiliário'].map((tag) => (
              <span key={tag} className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full cursor-pointer transition-colors border border-white/10">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};