import { useState } from 'react';
import { Search } from 'lucide-react';
import { foodItems, courseCategories } from '../data/food-data';
import { FoodItem } from '../data/food-data';
import CategoryList from '../components/CategoryList';
import FoodItemCard from '../components/FoodItem';  // Renamed component import

interface CoursesProps {
  favorites: FoodItem[];
  onToggleFavorite: (item: FoodItem) => void;
  onAddToCart: (item: FoodItem, quantity: number) => void;
}

export default function Courses({
  favorites,
  onToggleFavorite,
  onAddToCart
}: CoursesProps) {
  const [activeCategory, setActiveCategory] = useState(courseCategories[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = foodItems.filter(item => {
    const matchesCategory = activeCategory === 'Tous' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pb-24">
      <div className="bg-white rounded-lg shadow-sm m-3 p-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 pl-3 pr-10 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <Search 
            size={18} 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
          />
        </div>
      </div>

      <CategoryList 
        categories={courseCategories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />
      
      <div className="grid grid-cols-2 gap-3 xs:gap-3 sm:gap-4 md:gap-5 px-3 mt-4 mx-auto w-full max-w-7xl">
        {filteredItems.map(item => (
          <FoodItemCard
            key={item.id}
            item={item}
            isFavorite={favorites.some(fav => fav.id === item.id)}
            onToggleFavorite={onToggleFavorite}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}