export interface Treatment {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  duration: string;
  price: number;
  benefits: string[];
  image: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  details: string;
  ingredients: string;
  volume: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface LocationInfo {
  city: string;
  address: string;
  phone: string;
  email: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface Article {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
}

export interface ReservationData {
  location: string;
  treatment: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  guests: number;
  notes?: string;
}
