import React, { useState } from 'react';
import { Heart, ShoppingCart, User, Search as SearchIcon, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onCartClick: () => void;
  onProfileClick: () => void;
  onSearchClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCartClick, onProfileClick, onSearchClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { items } = useCart();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-bold text-pink-600">Packets of Happiness</h1>
          </div>
          
          <div className="hidden lg:flex lg:items-center lg:space-x-12">
            <a className="text-gray-700 hover:text-pink-600 font-medium transition-colors">Home</a>
            <a className="text-gray-700 hover:text-pink-600 font-medium transition-colors">Shop</a>
            <a className="text-gray-700 hover:text-pink-600 font-medium transition-colors">Custom</a>
            <a className="text-gray-700 hover:text-pink-600 font-medium transition-colors">Corporate</a>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={onSearchClick}
              className="text-gray-700 hover:text-pink-600 transition-colors"
              aria-label="Search"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
            <button 
              className="text-gray-700 hover:text-pink-600 transition-colors"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" />
            </button>
            <button 
              onClick={onCartClick}
              className="text-gray-700 hover:text-pink-600 transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </button>
            <button 
              onClick={onProfileClick}
              className="text-gray-700 hover:text-pink-600 transition-colors"
              aria-label="Profile"
            >
              <User className="h-5 w-5" />
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-pink-600"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-1">
            <a className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md">
              Home
            </a>
            <a className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md">
              Shop
            </a>
            <a className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md">
              Custom
            </a>
            <a className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md">
              Corporate
            </a>
            <div className="flex justify-around py-4 border-t">
              <button onClick={onSearchClick} className="p-2">
                <SearchIcon className="h-5 w-5" />
              </button>
              <button className="p-2">
                <Heart className="h-5 w-5" />
              </button>
              <button onClick={onCartClick} className="p-2 relative">
                <ShoppingCart className="h-5 w-5" />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-600 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </button>
              <button onClick={onProfileClick} className="p-2">
                <User className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;