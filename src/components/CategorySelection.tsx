import React from 'react';
import { BookOpen } from 'lucide-react';
import { Category } from '../types';

interface CategorySelectionProps {
  categories: Category[];
  stateName: string;
  onCategorySelect: (categoryId: string) => void;
  onBack: () => void;
}

export const CategorySelection: React.FC<CategorySelectionProps> = ({
  categories,
  stateName,
  onCategorySelect,
  onBack
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-800">
              {stateName} CDL Practice Tests
            </h1>
          </div>

          <div className="space-y-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className="w-full p-6 text-left rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all"
              >
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600">{category.description}</p>
              </button>
            ))}
          </div>

          <button
            onClick={onBack}
            className="mt-6 text-gray-600 hover:text-blue-600 transition-colors"
          >
            ← Back to state selection
          </button>
        </div>
      </div>
    </div>
  );
};