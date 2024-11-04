import { Category } from '../types';

export const alabamaCategories: Category[] = [
  // General Knowledge Tests
  {
    id: 'general-knowledge-1',
    name: 'General Knowledge Test 1',
    description: 'Basic CDL knowledge including vehicle inspection, basic control, and communication.',
    state: 'AL',
    nextCategory: 'general-knowledge-2',
    previousCategory: null
  },
  {
    id: 'general-knowledge-2',
    name: 'General Knowledge Test 2',
    description: 'Space management, hazard awareness, emergency procedures, and cargo handling.',
    state: 'AL',
    nextCategory: 'general-knowledge-3',
    previousCategory: 'general-knowledge-1'
  },
  {
    id: 'general-knowledge-3',
    name: 'General Knowledge Test 3',
    description: 'Vehicle systems, maintenance, regulations, and accident procedures.',
    state: 'AL',
    nextCategory: 'general-knowledge-4',
    previousCategory: 'general-knowledge-2'
  },
  {
    id: 'general-knowledge-4',
    name: 'General Knowledge Test 4',
    description: 'Advanced safety techniques, special driving conditions, and CDL regulations.',
    state: 'AL',
    nextCategory: 'air-brakes-1',
    previousCategory: 'general-knowledge-3'
  },

  // Air Brakes Tests
  {
    id: 'air-brakes-1',
    name: 'Air Brakes Test 1',
    description: 'Basic air brake system components and operation.',
    state: 'AL',
    nextCategory: 'air-brakes-2',
    previousCategory: 'general-knowledge-4'
  },
  {
    id: 'air-brakes-2',
    name: 'Air Brakes Test 2',
    description: 'Dual air brake systems and emergency procedures.',
    state: 'AL',
    nextCategory: 'air-brakes-3',
    previousCategory: 'air-brakes-1'
  },
  {
    id: 'air-brakes-3',
    name: 'Air Brakes Test 3',
    description: 'Air brake inspection and maintenance procedures.',
    state: 'AL',
    nextCategory: 'air-brakes-4',
    previousCategory: 'air-brakes-2'
  },
  {
    id: 'air-brakes-4',
    name: 'Air Brakes Test 4',
    description: 'Advanced air brake system operation and troubleshooting.',
    state: 'AL',
    nextCategory: 'combination-1',
    previousCategory: 'air-brakes-3'
  }
  // Add remaining categories following the same pattern as Texas
];