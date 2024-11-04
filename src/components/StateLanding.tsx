import React from 'react';
import { ArrowLeft, BookOpen, Award, Clock, CheckCircle2, Brain } from 'lucide-react';
import { StarRating } from './StarRating';
import { Category } from '../types';

interface StateLandingProps {
  stateName: string;
  categories: Category[];
  onCategorySelect: (categoryId: string) => void;
  onBackToStates: () => void;
}

export const StateLanding: React.FC<StateLandingProps> = ({
  stateName,
  categories,
  onCategorySelect,
  onBackToStates
}) => {
  // Mock ratings data - in a real app this would come from your backend
  const categoryRatings: Record<string, { rating: number; reviews: number }> = {
    'general-knowledge-1': { rating: 4.5, reviews: 128 },
    'general-knowledge-2': { rating: 4.3, reviews: 95 },
    'general-knowledge-3': { rating: 4.7, reviews: 156 },
    'general-knowledge-4': { rating: 4.2, reviews: 82 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <button
            onClick={onBackToStates}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to State Selection
          </button>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Free CDL Practice Tests - {stateName}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Prepare for your CDL exam with our comprehensive practice tests designed specifically for {stateName} requirements.
            </p>
          </div>

          {/* Key Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-100 p-3 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Updated for 2024</h3>
                <p className="text-gray-600">Questions aligned with the latest {stateName} CDL manual and testing requirements.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-green-50 rounded-lg">
              <div className="bg-green-100 p-3 rounded-lg">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Detailed Explanations</h3>
                <p className="text-gray-600">Learn from detailed explanations for every question, right or wrong.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-lg">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Realistic Format</h3>
                <p className="text-gray-600">Experience the same format and time pressure as the actual CDL exam.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-orange-50 rounded-lg">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Track Progress</h3>
                <p className="text-gray-600">Monitor your improvement and identify areas needing more practice.</p>
              </div>
            </div>
          </div>

          {/* Available Tests Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Practice Tests</h2>
            <div className="grid gap-6">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="p-6 rounded-lg border-2 border-gray-200 hover:border-blue-200 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {category.name}
                      </h3>
                    </div>
                    <StarRating
                      rating={categoryRatings[category.id]?.rating || 0}
                      reviewCount={categoryRatings[category.id]?.reviews || 0}
                      categoryId={category.id}
                    />
                  </div>
                  <p className="text-gray-600 mb-4 ml-12">{category.description}</p>
                  <div className="ml-12">
                    <button
                      onClick={() => onCategorySelect(category.id)}
                      className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Start Test
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Study Tips Section */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-blue-600" />
              CDL Study Tips
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Take practice tests multiple times</li>
                <li>Review explanations thoroughly</li>
                <li>Focus on challenging areas</li>
                <li>Study the official CDL manual</li>
              </ul>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Create a consistent study schedule</li>
                <li>Use memory techniques for key concepts</li>
                <li>Join study groups or forums</li>
                <li>Take breaks to maintain focus</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};