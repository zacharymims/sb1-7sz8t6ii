import React from 'react';

interface ActionButtonsProps {
  showResult: boolean;
  selectedAnswer: string;
  onSubmit: () => void;
  onNext: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  showResult,
  selectedAnswer,
  onSubmit,
  onNext
}) => {
  return (
    <div className="flex justify-end gap-4">
      <button
        onClick={onSubmit}
        disabled={!selectedAnswer || showResult}
        className={`px-6 py-2 rounded-lg font-medium transition-all
          ${
            !selectedAnswer || showResult
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }
        `}
      >
        Submit
      </button>
      {showResult && (
        <button
          onClick={onNext}
          className="px-6 py-2 rounded-lg font-medium bg-blue-500 text-white hover:bg-blue-600 transition-all"
        >
          Next Question
        </button>
      )}
    </div>
  );
};