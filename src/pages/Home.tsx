import React from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="relative">
      <div className="h-screen relative">
        <img
          src="https://images.unsplash.com/photo-1617059322001-a61b3fc5a7a1?auto=format&fit=crop&q=80"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-center">
            Elegance Meets Comfort
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-center">
            Redefine Your Wardrobe with Soft&Warm
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              to="/categories"
              className="bg-white text-black px-8 py-3 rounded hover:bg-gray-100 transition"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-black transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}