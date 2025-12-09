import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

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

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-navy text-white p-2 rounded-lg">
              <DroneIcon size={24} className="text-cyan" />
            </div>
            <div>
              <span className="font-display font-bold text-xl text-navy tracking-tight">Squad</span>
              <span className="font-display font-bold text-xl text-cyan">rone</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Serviços', 'Pilotos', 'Como Funciona', 'Empresa', 'Suporte'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                className="text-graphite hover:text-cyan font-medium text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-navy font-semibold hover:text-cyan transition-colors text-sm">
              Entrar
            </button>
            <button className="bg-cyan hover:bg-cyan-hover text-white px-5 py-2.5 rounded-md font-semibold text-sm transition-all shadow-sm">
              Criar Conta
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-navy hover:text-cyan focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {['Serviços', 'Pilotos', 'Como Funciona', 'Empresa', 'Suporte'].map((item) => (
              <a
                key={item}
                href="#"
                className="block px-3 py-3 text-base font-medium text-graphite hover:text-cyan hover:bg-gray-50 rounded-md"
              >
                {item}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button className="w-full text-navy font-bold py-3 border border-gray-200 rounded-md">
                Entrar
              </button>
              <button className="w-full bg-cyan text-white font-bold py-3 rounded-md">
                Criar Conta
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};