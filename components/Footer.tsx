import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const DroneIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="4" height="4" x="10" y="10" rx="1" />
    <line x1="10" x2="6" y1="10" y2="6" />
    <line x1="14" x2="18" y1="10" y2="6" />
    <line x1="10" x2="6" y1="14" y2="18" />
    <line x1="14" x2="18" y1="14" y2="18" />
    <circle cx="5" cy="5" r="2" />
    <circle cx="19" cy="5" r="2" />
    <circle cx="5" cy="19" r="2" />
    <circle cx="19" cy="19" r="2" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
               <div className="bg-white/10 p-2 rounded-lg">
                 <DroneIcon size={24} className="text-cyan" />
               </div>
               <span className="font-display font-bold text-xl">Squad<span className="text-cyan">rone</span></span>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              O maior marketplace corporativo de serviços com drones no Brasil. Profissionais certificados. Serviços confiáveis. Resultados precisos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-cyan transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-cyan transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold text-lg mb-6">Empresa</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cyan transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Imprensa</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Certificações</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold text-lg mb-6">Suporte</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cyan transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-cyan transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>contato@squadrone.com.br</li>
              <li>0800 123 4567</li>
              <li>Av. Paulista, 1000 - São Paulo, SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Squadrone. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};