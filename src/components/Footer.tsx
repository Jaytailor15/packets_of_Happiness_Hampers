import React from 'react';
import { Phone, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold text-pink-400 mb-4">Packets of Happiness</h3>
            <p className="text-gray-400">
              Spreading joy through thoughtfully curated gift hampers for every special moment.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a className="text-gray-400 hover:text-pink-400">About Us</a></li>
              <li><a className="text-gray-400 hover:text-pink-400">Shop</a></li>
              <li><a className="text-gray-400 hover:text-pink-400">Custom Hampers</a></li>
              <li><a className="text-gray-400 hover:text-pink-400">Corporate Gifts</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a className="text-gray-400 hover:text-pink-400">Contact Us</a></li>
              <li><a className="text-gray-400 hover:text-pink-400">Shipping Policy</a></li>
              <li><a className="text-gray-400 hover:text-pink-400">Returns & Exchanges</a></li>
              <li><a className="text-gray-400 hover:text-pink-400">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-pink-400 mr-2" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-pink-400 mr-2" />
                <span className="text-gray-400">hello@packetsofhappiness.com</span>
              </div>
              <div className="flex items-center">
                <Instagram className="h-5 w-5 text-pink-400 mr-2" />
                <span className="text-gray-400">@packetsofhappiness</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Packets of Happiness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;