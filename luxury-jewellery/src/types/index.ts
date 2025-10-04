export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'bridal' | 'royal' | 'minimalist' | 'daily-glamour';
  image_url: string;
  model_url?: string;
  featured: boolean;
  created_at: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image_url: string;
  product_ids: string[];
}

export interface JourneyPanel {
  id: string;
  title: string;
  content: string;
  media_type: 'image' | 'video';
  media_url: string;
  order: number;
}
