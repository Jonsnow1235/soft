import React from 'react';
import { toast } from 'react-hot-toast';
import type { Product } from '../../types';
import { ColorPicker } from './ColorPicker';
import { SizePicker } from './SizePicker';
import { Button } from '../ui/Button';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, size: string, color: string) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = React.useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = React.useState(product.colors[0]);

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, selectedColor);
    toast.success('Added to Cart!', {
      position: 'bottom-right',
      className: 'bg-black text-white',
    });
  };

  return (
    <div className="group bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <div className="aspect-w-4 aspect-h-5">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="p-4 space-y-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.price} TND</p>
        </div>

        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium text-gray-700">Size:</label>
            <SizePicker
              sizes={product.sizes}
              selectedSize={selectedSize}
              onChange={setSelectedSize}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Color:</label>
            <ColorPicker
              colors={product.colors}
              selectedColor={selectedColor}
              onChange={setSelectedColor}
            />
          </div>
        </div>

        <Button onClick={handleAddToCart} className="w-full">
          Add to Cart
        </Button>
      </div>
    </div>
  );
}