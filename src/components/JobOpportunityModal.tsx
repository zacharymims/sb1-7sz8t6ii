import React from 'react';
import { Briefcase, X } from 'lucide-react';

interface JobOpportunityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JobOpportunityModal: React.FC<JobOpportunityModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-100 p-2 rounded-lg">
            <Briefcase className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Looking for CDL Jobs?</h2>
        </div>

        <p className="text-gray-600 mb-6">
          Put your CDL knowledge to work! Browse thousands of available positions and find your next opportunity.
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Maybe later
          </button>
          <a
            href="https://jobs.cdlemploymentsolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            View Jobs
          </a>
        </div>
      </div>
    </div>
  );
};