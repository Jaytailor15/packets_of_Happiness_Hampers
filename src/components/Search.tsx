import React, { useState } from 'react';
import { X, Search as SearchIcon } from 'lucide-react';

interface SearchProps {
  onClose: () => void;
}

const Search: React.FC<SearchProps> = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = [
    { id: 1, name: "Luxury Spa Day", price: "$149.99", category: "Wellness" },
    { id: 2, name: "Gourmet Delights", price: "$199.99", category: "Food" },
    { id: 3, name: "Birthday Surprise", price: "$129.99", category: "Celebration" },
  ].filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center">
      <div className="bg-white w-full max-w-2xl mt-20 rounded-t-lg">
        <div className="p-4 border-b">
          <div className="flex items-center">
            <SearchIcon className="h-5 w-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search hampers, occasions, or categories..."
              className="flex-1 outline-none text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="p-4 max-h-96 overflow-auto">
          {searchResults.map(result => (
            <div key={result.id} className="p-3 hover:bg-gray-50 rounded cursor-pointer">
              <h3 className="font-medium">{result.name}</h3>
              <p className="text-sm text-gray-500">{result.category}</p>
              <p className="text-sm text-pink-600">{result.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;