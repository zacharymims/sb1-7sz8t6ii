import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Category } from '../types';

interface CategoryNavigationProps {
  currentCategory: Category;
  onNavigate: (categoryId: string) => void;
}

export const CategoryNavigation: React.FC<CategoryNavigationProps> = ({
  currentCategory,
  onNavigate
}) => {
  // Extract test number from category ID (e.g., "general-knowledge-1" -> 1)
  const currentTestNumber = parseInt(currentCategory.id.split('-')[2]);

  return (
    <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
      {currentCategory.previousCategory && (
        <button
          onClick={() => onNavigate(currentCategory.previousCategory!)}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <div className="flex flex-col items-start">
            <span className="text-xs text-gray-500">Previous Category</span>
            <span>General Knowledge Test {currentTestNumber - 1}</span>
          </div>
        </button>
      )}

      {currentCategory.nextCategory && (
        <button
          onClick={() => onNavigate(currentCategory.nextCategory!)}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors ml-auto"
        >
          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-500">Next Category</span>
            <span>General Knowledge Test {currentTestNumber + 1}</span>
          </div>
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};