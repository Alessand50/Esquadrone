import { 
  Camera, 
  Factory, 
  Ruler, 
  Sprout, 
  ShieldCheck, 
  Truck, 
  Siren, 
  Gamepad2, 
  HardHat, 
  Calendar,
  MonitorPlay
} from 'lucide-react';
import { Category, Pilot, Testimonial } from './types';

export const CATEGORIES: Category[] = [
  { id: 'av', title: 'Foto/Vídeo', icon: Camera },
  { id: 'inspection', title: 'Inspeção Industrial', icon: Factory },
  { id: 'eng', title: 'Engenharia', icon: Ruler },
  { id: 'topo', title: 'Topografia', icon: MonitorPlay },
  { id: 'agro', title: 'Agricultura', icon: Sprout },
  { id: 'sec', title: 'Segurança', icon: ShieldCheck },
  { id: 'log', title: 'Logística', icon: Truck },
  { id: 'emergency', title: 'Emergência', icon: Siren },
  { id: 'fpv', title: 'FPV', icon: Gamepad2 },
  { id: 'works', title: 'Obras', icon: HardHat },
  { id: 'events', title: 'Eventos', icon: Calendar },
];

export const FEATURED_PILOTS: Pilot[] = [
  {
    id: 1,
    name: "Carlos Mendes",
    location: "São Paulo, SP",
    rating: 5.0,
    specialties: ["Inspeção Predial", "Termografia"],
    imageUrl: "https://picsum.photos/200/200?random=1",
    verified: true
  },
  {
    id: 2,
    name: "Fernanda Lima",
    location: "Goiânia, GO",
    rating: 4.9,
    specialties: ["Agricultura de Precisão", "Mapeamento"],
    imageUrl: "https://picsum.photos/200/200?random=2",
    verified: true
  },
  {
    id: 3,
    name: "Roberto Silva",
    location: "Rio de Janeiro, RJ",
    rating: 5.0,
    specialties: ["Audiovisual", "Eventos Corporativos"],
    imageUrl: "https://picsum.photos/200/200?random=3",
    verified: true
  },
  {
    id: 4,
    name: "Ana Beatriz",
    location: "Curitiba, PR",
    rating: 5.0,
    specialties: ["Topografia", "Acompanhamento de Obras"],
    imageUrl: "https://picsum.photos/200/200?random=4",
    verified: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: "Encontramos um piloto para inspeção de fachada em menos de 2 horas. Relatório técnico impecável e documentação ANAC em dia.",
    author: "Eng. Ricardo Souza",
    company: "Construtora Vértice",
    role: "Diretor de Obras"
  },
  {
    id: 2,
    text: "A plataforma garantiu a segurança jurídica que nossa empresa precisava para contratar serviços de mapeamento aéreo.",
    author: "Mariana Costa",
    company: "AgroTech Brasil",
    role: "Gerente de Inovação"
  },
  {
    id: 3,
    text: "Profissionalismo do início ao fim. O piloto contratado seguiu todas as normas de segurança para nosso evento corporativo.",
    author: "Paulo H. Almeida",
    company: "Eventos Prime",
    role: "Coordenador Geral"
  }
];