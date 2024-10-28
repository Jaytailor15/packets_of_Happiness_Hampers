import React from 'react';
import { Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const FeaturedHampers = () => {
  const { addItem } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const hampers = [
    {
      id: 1,
      name: "Luxury Spa Day",
      price: "$149.99",
      image: "https://images.unsplash.com/photo-1544380904-c686aad2fc40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Premium spa essentials with aromatherapy candles"
    },
    {
      id: 2,
      name: "Gourmet Delights",
      price: "$199.99",
      image: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Finest chocolates and artisanal treats"
    },
    {
      id: 3,
      name: "Birthday Surprise",
      price: "$129.99",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Celebration essentials with premium goodies"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-12">
          Featured Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hampers.map((hamper) => (
            <div key={hamper.id} className="group relative">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={hamper.image}
                  alt={hamper.name}
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <button 
                  onClick={() => {
                    isInWishlist(hamper.id) 
                      ? removeFromWishlist(hamper.id)
                      : addToWishlist(hamper);
                  }}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-pink-50"
                >
                  <Heart 
                    className={`h-5 w-5 ${isInWishlist(hamper.id) ? 'fill-pink-600 text-pink-600' : 'text-pink-600'}`} 
                  />
                </button>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-medium text-gray-900">{hamper.name}</h3>
                <p className="text-gray-600 mt-1">{hamper.description}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-lg font-semibold text-pink-600">{hamper.price}</span>
                  <button 
                    onClick={() => addItem(hamper)}
                    className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedHampers;