import React, { useState } from 'react';
import { X, User, Package, Heart, Settings } from 'lucide-react';

interface ProfileProps {
  onClose: () => void;
}

const Profile: React.FC<ProfileProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full">
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-semibold">My Profile</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-pink-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">John Doe</h3>
              <p className="text-gray-500">john.doe@example.com</p>
            </div>
          </div>

          <div className="flex space-x-4 border-b mb-6">
            <button
              className={`pb-2 px-1 ${activeTab === 'orders' ? 'border-b-2 border-pink-600 text-pink-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('orders')}
            >
              Orders
            </button>
            <button
              className={`pb-2 px-1 ${activeTab === 'wishlist' ? 'border-b-2 border-pink-600 text-pink-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('wishlist')}
            >
              Wishlist
            </button>
            <button
              className={`pb-2 px-1 ${activeTab === 'settings' ? 'border-b-2 border-pink-600 text-pink-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('settings')}
            >
              Settings
            </button>
          </div>

          {activeTab === 'orders' && (
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Order #12345</span>
                  <span className="text-green-600 text-sm">Delivered</span>
                </div>
                <p className="text-sm text-gray-500">Luxury Spa Day Hamper</p>
                <p className="text-sm text-gray-500">March 15, 2024</p>
              </div>
            </div>
          )}

          {activeTab === 'wishlist' && (
            <div className="space-y-4">
              <div className="border rounded-lg p-4 flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1544380904-c686aad2fc40?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="Wishlist item"
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h4 className="font-medium">Gourmet Delights</h4>
                  <p className="text-pink-600">$199.99</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-4">
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50">
                Edit Profile
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50">
                Change Password
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50">
                Notifications
              </button>
              <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 text-red-600">
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;