import type { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Hoodie Blanket',
    price: 89.99,
    description: 'Our bestselling hoodie blanket combines ultimate comfort with style.',
    images: [
      'https://images.unsplash.com/photo-1614975059251-992f11792b9f?auto=format&fit=crop&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#000000', '#F5F5DC'],
    category: 'Hoodies',
    isBestSeller: true,
  },
  {
    id: '2',
    name: 'Stripped Oversized Shirt',
    price: 69.99,
    description: 'Casual yet elegant stripped oversized shirt perfect for any occasion.',
    images: [
      'https://images.unsplash.com/photo-1598961942613-ba897716405b?auto=format&fit=crop&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#FFFFFF', '#000000'],
    category: 'Shirts',
  },
  {
    id: '3',
    name: 'Wide Leg Pants',
    price: 79.99,
    description: 'Comfortable and stylish wide leg pants for a sophisticated look.',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#FFFFFF', '#000000'],
    category: 'Pants',
  },
  {
    id: '4',
    name: 'Bodysuit',
    price: 59.99,
    description: 'Elegant bodysuit that combines comfort with style.',
    images: [
      'https://images.unsplash.com/photo-1602353195884-44ea7e76e196?auto=format&fit=crop&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#000000', '#F5F5DC'],
    category: 'Bodysuits',
  },
  {
    id: '5',
    name: 'Sweat Pants',
    price: 69.99,
    description: 'Premium sweat pants for ultimate comfort.',
    images: [
      'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['#000000', '#F5F5DC', '#FFFFFF'],
    category: 'Pants',
  }
];