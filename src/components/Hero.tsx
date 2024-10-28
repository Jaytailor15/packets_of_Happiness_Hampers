import React from 'react';
import { Gift, Clock, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            Curated Gifts for
            <span className="block text-pink-600">Special Moments</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Discover our collection of thoughtfully crafted luxury gift hampers for every occasion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-pink-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors">
              Explore Collection
            </button>
            <button className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-lg font-medium hover:bg-pink-50 transition-colors">
              Custom Hamper
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <Gift className="h-6 w-6 text-pink-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Premium Selection</h3>
            <p className="text-gray-600">Handpicked luxury items from renowned brands worldwide</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-pink-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Express Delivery</h3>
            <p className="text-gray-600">Same-day delivery available in selected cities</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-pink-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Quality Promise</h3>
            <p className="text-gray-600">100% satisfaction guaranteed on every order</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;