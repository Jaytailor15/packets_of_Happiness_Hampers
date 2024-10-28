import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FeaturedHampers from './components/FeaturedHampers';
import CustomHamper from './components/CustomHamper';
import Hero from './components/Hero';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Search from './components/Search';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <CartProvider>
      <WishlistProvider>
        <div className="min-h-screen bg-white">
          <Navbar 
            onCartClick={() => setShowCart(true)}
            onProfileClick={() => setShowProfile(true)}
            onSearchClick={() => setShowSearch(true)}
          />
          <Hero />
          <FeaturedHampers />
          <CustomHamper />
          <Footer />
          
          {showCart && <Cart onClose={() => setShowCart(false)} />}
          {showProfile && <Profile onClose={() => setShowProfile(false)} />}
          {showSearch && <Search onClose={() => setShowSearch(false)} />}
        </div>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;