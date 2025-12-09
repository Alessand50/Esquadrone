import React from 'react';
import { FileBadge, Shield, CreditCard, Headphones } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-20 bg-lightgray border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: FileBadge,
              title: "Pilotos Certificados",
              desc: "Todos os pilotos possuem registro na ANAC e certificações validadas."
            },
            {
              icon: Shield,
              title: "Conformidade Legal",
              desc: "Operações seguindo rigorosamente os documentos RBAC-E94."
            },
            {
              icon: CreditCard,
              title: "Pagamento Seguro",
              desc: "O valor só é liberado ao piloto após a conclusão satisfatória do serviço."
            },
            {
              icon: Headphones,
              title: "Suporte Humano",
              desc: "Equipe especializada pronta para auxiliar em qualquer etapa."
            }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-start p-6 bg-white rounded-lg shadow-sm h-full">
              <div className="bg-navy/5 p-3 rounded-lg mb-4">
                <item.icon className="w-8 h-8 text-navy" />
              </div>
              <h3 className="font-bold text-lg text-navy mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};