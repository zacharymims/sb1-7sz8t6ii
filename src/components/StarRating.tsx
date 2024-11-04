import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { ReviewModal } from './ReviewModal';

interface StarRatingProps {
  rating: number;
  reviewCount: number;
  categoryId: string;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, reviewCount, categoryId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  return (
    <>
      <div className="flex items-center gap-2">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center hover:opacity-75 transition-opacity"
        >
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-4 h-4 ${
                  star <= (hoveredStar || rating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                }`}
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(null)}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">({reviewCount} reviews)</span>
        </button>
      </div>

      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        categoryId={categoryId}
        currentRating={rating}
      />
    </>
  );
};