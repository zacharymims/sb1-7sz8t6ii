import React from 'react';
import { MapPin } from 'lucide-react';

interface StateHeaderProps {
  stateName: string;
  categoryName: string;
}

export const StateHeader: React.FC<StateHeaderProps> = ({
  stateName,
  categoryName
}) => {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="bg-blue-100 p-2 rounded-lg">
        <MapPin className="w-6 h-6 text-blue-600" />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-800">{stateName} CDL Practice Test</h1>
        <p className="text-gray-600">{categoryName}</p>
      </div>
    </div>
  );
};