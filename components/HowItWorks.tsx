import React from 'react';
import { ClipboardList, Users, CheckSquare } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl mb-4">Como Funciona</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A forma mais segura e profissional de contratar pilotos de drone para qualquer necessidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-cyan/30 z-0"></div>

          {[
            {
              icon: ClipboardList,
              title: "1. Descreva o que precisa",
              desc: "Detalhe seu projeto: local, data, tipo de serviço e especificações técnicas."
            },
            {
              icon: Users,
              title: "2. Compare pilotos verificados",
              desc: "Receba propostas de profissionais certificados e avalie seus portfólios."
            },
            {
              icon: CheckSquare,
              title: "3. Feche o serviço",
              desc: "Contrate com segurança, pagamento protegido e garantia de entrega."
            }
          ].map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-navy-light border-2 border-cyan rounded-full flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(27,168,223,0.3)]">
                <step.icon className="w-10 h-10 text-cyan" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};