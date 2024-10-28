import React, { useState } from 'react';
import { Package, Gift, Calendar, MessageSquare } from 'lucide-react';

interface CustomHamperFormData {
  occasion: string;
  budget: string;
  items: string[];
  message: string;
  deliveryDate: string;
}

const CustomHamperForm = () => {
  const [formData, setFormData] = useState<CustomHamperFormData>({
    occasion: '',
    budget: '',
    items: [],
    message: '',
    deliveryDate: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
  };

  const itemOptions = [
    'Chocolates', 'Wines', 'Spa Products', 'Gourmet Snacks',
    'Aromatherapy', 'Tea Collection', 'Skincare', 'Candles'
  ];

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4">
          <h3 className="text-lg font-semibold">Thank you for your custom hamper request!</h3>
          <p>Our team will contact you shortly to discuss your preferences.</p>
        </div>
        <button
          onClick={() => setSubmitted(false)}
          className="text-pink-600 hover:text-pink-700"
        >
          Create another custom hamper
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Occasion
        </label>
        <select
          className="w-full border-gray-300 rounded-lg shadow-sm focus:border-pink-500 focus:ring-pink-500"
          value={formData.occasion}
          onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
          required
        >
          <option value="">Select an occasion</option>
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="wedding">Wedding</option>
          <option value="corporate">Corporate</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Budget Range
        </label>
        <select
          className="w-full border-gray-300 rounded-lg shadow-sm focus:border-pink-500 focus:ring-pink-500"
          value={formData.budget}
          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          required
        >
          <option value="">Select your budget</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-200">$100 - $200</option>
          <option value="200-500">$200 - $500</option>
          <option value="500+">$500+</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Preferred Items
        </label>
        <div className="grid grid-cols-2 gap-2">
          {itemOptions.map((item) => (
            <label key={item} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.items.includes(item)}
                onChange={(e) => {
                  const newItems = e.target.checked
                    ? [...formData.items, item]
                    : formData.items.filter(i => i !== item);
                  setFormData({ ...formData, items: newItems });
                }}
                className="rounded text-pink-600 focus:ring-pink-500"
              />
              <span className="text-gray-700">{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Personal Message
        </label>
        <textarea
          className="w-full border-gray-300 rounded-lg shadow-sm focus:border-pink-500 focus:ring-pink-500"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Add a personal message to your hamper..."
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Preferred Delivery Date
        </label>
        <input
          type="date"
          className="w-full border-gray-300 rounded-lg shadow-sm focus:border-pink-500 focus:ring-pink-500"
          value={formData.deliveryDate}
          onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-pink-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-pink-700 transition-colors"
      >
        Submit Custom Hamper Request
      </button>
    </form>
  );
};

export default CustomHamperForm;