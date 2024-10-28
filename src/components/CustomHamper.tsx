import React, { useState } from 'react';
import { Package, Gift } from 'lucide-react';
import CustomHamperForm from './CustomHamperForm';

const CustomHamper = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="py-16 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Create Your Custom Hamper
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Design a personalized gift hamper that's uniquely yours. Choose from our premium selection of items and create something special.
          </p>
        </div>

        {!showForm ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <Package className="h-6 w-6 text-pink-600 mr-3" />
                  <h3 className="text-xl font-medium">Choose Your Items</h3>
                </div>
                <p className="text-gray-600">
                  Select from our curated collection of premium gifts, treats, and accessories.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <Gift className="h-6 w-6 text-pink-600 mr-3" />
                  <h3 className="text-xl font-medium">Personalize Your Package</h3>
                </div>
                <p className="text-gray-600">
                  Add a personal message and choose your preferred packaging style.
                </p>
              </div>

              <button 
                onClick={() => setShowForm(true)}
                className="w-full bg-pink-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors"
              >
                Start Creating Your Hamper
              </button>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Custom hamper"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-pink-600 font-semibold">Starting from</p>
                <p className="text-2xl font-bold text-gray-900">$99.99</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <CustomHamperForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomHamper;