import React from 'react';
import { AlertCircle, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

interface QuizCompleteProps {
  correctAnswers: number;
  totalQuestions: number;
  hasFailed: boolean;
  onRestart: () => void;
}

export const QuizComplete: React.FC<QuizCompleteProps> = ({
  correctAnswers,
  totalQuestions,
  hasFailed,
  onRestart
}) => {
  const scorePercentage = (correctAnswers / totalQuestions) * 100;

  return (
    <div className="text-center">
      {hasFailed ? (
        <div className="mb-8">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Quiz Failed</h2>
          <p className="text-gray-600">
            You've exceeded the maximum number of allowed mistakes.
          </p>
        </div>
      ) : (
        <div className="mb-8">
          {scorePercentage >= 80 ? (
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
          ) : (
            <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          )}
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Quiz Completed!
          </h2>
          <p className="text-gray-600">
            You scored {correctAnswers} out of {totalQuestions} ({scorePercentage.toFixed(1)}%)
          </p>
          <p className="text-gray-600 mt-2">
            {scorePercentage >= 80 ? 'Congratulations! You passed!' : 'You did not pass.'}
          </p>
        </div>
      )}
      <button
        onClick={onRestart}
        className="inline-flex items-center gap-2 px-6 py-2 rounded-lg font-medium bg-blue-500 text-white hover:bg-blue-600 transition-all"
      >
        <RotateCcw className="w-4 h-4" />
        Restart Quiz
      </button>
    </div>
  );
};