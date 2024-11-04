import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbsProps {
  currentQuestion: number;
  totalQuestions: number;
  hasStarted: boolean;
  isCompleted: boolean;
  stateName: string;
  categoryName: string;
  onStateClick: () => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  currentQuestion,
  totalQuestions,
  hasStarted,
  isCompleted,
  stateName,
  categoryName,
  onStateClick
}) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center space-x-2 text-sm text-gray-500">
        <li>
          <a href="/" className="hover:text-blue-600">Home</a>
        </li>
        <ChevronRight className="w-4 h-4" />
        <li>
          <button
            onClick={onStateClick}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            {stateName}
          </button>
        </li>
        <ChevronRight className="w-4 h-4" />
        <li>
          <span className="text-gray-700">{categoryName}</span>
        </li>
        {hasStarted && !isCompleted && (
          <>
            <ChevronRight className="w-4 h-4" />
            <li>
              <span className="text-gray-700">Question {currentQuestion + 1}/{totalQuestions}</span>
            </li>
          </>
        )}
        {isCompleted && (
          <>
            <ChevronRight className="w-4 h-4" />
            <li>
              <span className="text-gray-700">Results</span>
            </li>
          </>
        )}
      </ol>
    </nav>
  );
};