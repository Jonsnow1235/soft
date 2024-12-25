export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  sizes: ('S' | 'M' | 'L' | 'XL')[];
  colors: string[];
  category: string;
  isBestSeller?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface Order {
  id: string;
  fullName: string;
  phoneNumber: string;
  address: string;
  items: CartItem[];
  totalCost: number;
  processed: boolean;
  createdAt: Date;
}