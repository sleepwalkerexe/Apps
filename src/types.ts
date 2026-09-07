export type ProjectCategory = 'Tutti' | 'E-commerce' | 'Web Platform' | 'Luxury & Architecture' | 'Fintech';

export type DemoType = 'ecommerce' | 'saas' | 'editorial' | 'fintech' | 'architecture';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  year: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  fullOverview: string;
  thumbnail: string;
  galleryImages: string[];
  metrics: ProjectMetric[];
  technologies: string[];
  demoType: DemoType;
  demoUrl: string;
  featured: boolean;
  testimonialId?: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  score: number;
  platform: 'Google' | 'Clutch' | 'Trustpilot' | 'Awwwards';
  date: string;
  verified: boolean;
  quote: string;
  projectRef: string;
}

export interface ClientBrand {
  id: string;
  name: string;
  sector: string;
  location: string;
  svgMark: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}
