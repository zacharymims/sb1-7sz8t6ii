import React from 'react';

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  mistakesMade: number;
  maxMistakes: number;
}

export const QuizProgress: React.FC<QuizProgressProps> = ({
  currentQuestion,
  totalQuestions,
  mistakesMade,
  maxMistakes
}) => {
  const quizProgress = ((currentQuestion + 1) / totalQuestions) * 100;
  const mistakesProgress = (mistakesMade / maxMistakes) * 100;

  return (
    <div className="space-y-6">
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-500">Progress</span>
          <span className="text-sm font-medium text-gray-500">
            {currentQuestion + 1} of {totalQuestions}
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${quizProgress}%` }}
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-500">Mistakes</span>
          <span className="text-sm font-medium text-gray-500">
            {mistakesMade} of {maxMistakes} allowed
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-red-500 rounded-full transition-all duration-300"
            style={{ width: `${mistakesProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
};