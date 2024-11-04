import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

interface ResultMessageProps {
  isCorrect: boolean;
  correctAnswer: string;
  explanation?: string;
}

export const ResultMessage: React.FC<ResultMessageProps> = ({
  isCorrect,
  correctAnswer,
  explanation
}) => {
  return (
    <div className={`p-4 rounded-lg mb-6 ${
      isCorrect ? 'bg-green-50' : 'bg-red-50'
    }`}>
      <div className="flex items-center gap-2">
        {isCorrect ? (
          <CheckCircle2 className="w-5 h-5 text-green-500" />
        ) : (
          <XCircle className="w-5 h-5 text-red-500" />
        )}
        <span className={isCorrect ? 'text-green-700' : 'text-red-700'}>
          {isCorrect ? 'Correct!' : `Incorrect. The correct answer is: ${correctAnswer}`}
        </span>
      </div>
      {!isCorrect && explanation && (
        <p className="mt-2 text-gray-600 ml-7">
          {explanation}
        </p>
      )}
    </div>
  );
};