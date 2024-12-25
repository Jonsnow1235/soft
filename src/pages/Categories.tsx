import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { useCart } from '../hooks/useCart';
import { toast } from 'react-hot-toast';

export function Categories() {
  const { addToCart } = useCart();

  const handleAddToCart = (product, size, color) => {
    addToCart(product, size, color);
    toast.success('Added to Cart!', {
      position: 'bottom-right',
      className: 'bg-black text-white',
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif font-bold mb-8">Our Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}