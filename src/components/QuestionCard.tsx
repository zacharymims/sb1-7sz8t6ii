import React from 'react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string;
  onAnswerSelect: (answer: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onAnswerSelect,
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {question.question}
      </h2>

      <div className="space-y-4">
        {question.answers.map((answer, index) => (
          <label
            key={index}
            className={`block p-4 rounded-lg border-2 cursor-pointer transition-all
              ${
                selectedAnswer === answer
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-200 hover:bg-gray-50'
              }
            `}
          >
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="answer"
                value={answer}
                checked={selectedAnswer === answer}
                onChange={(e) => onAnswerSelect(e.target.value)}
                className="h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-500"
              />
              <span className="text-gray-700 text-lg">{answer}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};