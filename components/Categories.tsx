import React from 'react';
import { CATEGORIES } from '../constants';

export const Categories: React.FC = () => {
  return (
    <section className="py-20 bg-lightgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl text-navy mb-4">Categorias de Serviço</h2>
          <div className="w-20 h-1 bg-cyan mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Encontre especialistas qualificados para cada tipo de operação aérea.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer group border border-transparent hover:border-cyan/30"
            >
              <div className="w-12 h-12 bg-navy/5 group-hover:bg-cyan/10 rounded-lg flex items-center justify-center mb-4 transition-colors">
                <cat.icon className="text-navy group-hover:text-cyan w-6 h-6 transition-colors" />
              </div>
              <h3 className="font-bold text-graphite group-hover:text-navy transition-colors">{cat.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};