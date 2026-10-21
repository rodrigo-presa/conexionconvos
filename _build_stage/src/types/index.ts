export type Category =
  | "Viajes"
  | "Gastronomía"
  | "Bienestar"
  | "Moda"
  | "Decoración"
  | "Tendencias";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: Category;
  author: string;
  date: string;
  readTime: number; // minutes
  imageUrl: string;
  imageAlt: string;
  slug: string;
  featured?: boolean;
  trending?: boolean;
}

export interface CarouselItem {
  id: string;
  title: string;
  imageUrl: string;
  href: string;
}

export interface WeatherData {
  temp: number;
  description: string;
  icon: string;
}

export interface TopBarData {
  date: string;
  weather: WeatherData;
  usdBlue: number;
  usdOficial: number;
}
