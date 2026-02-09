export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Testimonial {
  text: string;
  author: string;
  role?: string;
}