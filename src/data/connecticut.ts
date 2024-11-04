import { Category } from '../types';

export const connecticutCategories: Category[] = [
  // General Knowledge Tests
  {
    id: 'general-knowledge-1',
    name: 'General Knowledge Test 1',
    description: 'Basic CDL knowledge including vehicle inspection, basic control, and communication.',
    state: 'CT',
    nextCategory: 'general-knowledge-2',
    previousCategory: null
  },
  {
    id: 'general-knowledge-2',
    name: 'General Knowledge Test 2',
    description: 'Space management, hazard awareness, emergency procedures, and cargo handling.',
    state: 'CT',
    nextCategory: 'general-knowledge-3',
    previousCategory: 'general-knowledge-1'
  },
  // ... Add remaining categories following Texas pattern
];