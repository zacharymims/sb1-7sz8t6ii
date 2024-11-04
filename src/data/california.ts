import { Category } from '../types';

export const californiaCategories: Category[] = [
  {
    id: 'general-knowledge-1',
    name: 'General Knowledge Test 1',
    description: 'Basic CDL knowledge including vehicle inspection, basic control, and communication.',
    state: 'CA',
    nextCategory: 'general-knowledge-2',
    previousCategory: null
  },
  // ... Add all categories following Texas pattern
];