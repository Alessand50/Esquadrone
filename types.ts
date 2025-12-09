import { LucideIcon } from 'lucide-react';

export interface Pilot {
  id: number;
  name: string;
  location: string;
  rating: number;
  specialties: string[];
  imageUrl: string;
  verified: boolean;
}

export interface Category {
  id: string;
  title: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  company: string;
  role: string;
}

export interface StatProps {
  number: string;
  label: string;
}