import React from 'react';
import { Award, Users } from 'lucide-react';

const Founders = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-pink-600 font-medium">Our Story</span>
          <h2 className="text-3xl font-serif font-bold text-gray-900 mt-2">
            The Vision Behind Packets of Happiness
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="relative mb-6">
              <div className="w-64 h-64 mx-auto md:mx-0 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Shrusti"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 bg-pink-600 text-white px-6 py-1 rounded-full">
                Founder & CEO
              </div>
            </div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Shrusti</h3>
            <p className="text-gray-600 mb-6 max-w-lg">
              "Our mission is to revolutionize the gifting experience by combining luxury with personalization. Every hamper tells a story, creates a memory, and spreads happiness."
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <div className="flex items-center">
                <Award className="h-5 w-5 text-pink-600 mr-2" />
                <span className="text-sm text-gray-600">Best Gifting Platform 2024</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-pink-600 mr-2" />
                <span className="text-sm text-gray-600">50,000+ Happy Customers</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Neha"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-pink-600 text-white px-6 py-1 rounded-full">
                Creative Director
              </div>
            </div>
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Neha</h3>
            <p className="text-gray-600 mb-4">
              "We believe in making every celebration special with personalized gifting solutions that exceed expectations."
            </p>
          </div>
        </div>

        {/* Achievement Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 bg-pink-50 rounded-xl p-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-600">5000+</div>
            <div className="text-gray-600">Hampers Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-600">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-600">20+</div>
            <div className="text-gray-600">Cities Covered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-600">150+</div>
            <div className="text-gray-600">Corporate Clients</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;