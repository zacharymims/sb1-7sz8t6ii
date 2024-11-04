import { Category } from '../types';

export const hawaiiCategories: Category[] = [
  // General Knowledge Tests
  {
    id: 'general-knowledge-1',
    name: 'General Knowledge Test 1',
    description: 'Basic CDL knowledge including vehicle inspection, basic control, and communication.',
    state: 'HI',
    nextCategory: 'general-knowledge-2',
    previousCategory: null
  },
  {
    id: 'general-knowledge-2',
    name: 'General Knowledge Test 2',
    description: 'Space management, hazard awareness, emergency procedures, and cargo handling.',
    state: 'HI',
    nextCategory: 'general-knowledge-3',
    previousCategory: 'general-knowledge-1'
  },
  {
    id: 'general-knowledge-3',
    name: 'General Knowledge Test 3',
    description: 'Vehicle systems, maintenance, regulations, and accident procedures.',
    state: 'HI',
    nextCategory: 'general-knowledge-4',
    previousCategory: 'general-knowledge-2'
  },
  {
    id: 'general-knowledge-4',
    name: 'General Knowledge Test 4',
    description: 'Advanced safety techniques, special driving conditions, and CDL regulations.',
    state: 'HI',
    nextCategory: 'air-brakes-1',
    previousCategory: 'general-knowledge-3'
  },

  // Air Brakes Tests
  {
    id: 'air-brakes-1',
    name: 'Air Brakes Test 1',
    description: 'Basic air brake system components and operation.',
    state: 'HI',
    nextCategory: 'air-brakes-2',
    previousCategory: 'general-knowledge-4'
  },
  {
    id: 'air-brakes-2',
    name: 'Air Brakes Test 2',
    description: 'Dual air brake systems and emergency procedures.',
    state: 'HI',
    nextCategory: 'air-brakes-3',
    previousCategory: 'air-brakes-1'
  },
  {
    id: 'air-brakes-3',
    name: 'Air Brakes Test 3',
    description: 'Air brake inspection and maintenance procedures.',
    state: 'HI',
    nextCategory: 'air-brakes-4',
    previousCategory: 'air-brakes-2'
  },
  {
    id: 'air-brakes-4',
    name: 'Air Brakes Test 4',
    description: 'Advanced air brake system operation and troubleshooting.',
    state: 'HI',
    nextCategory: 'combination-1',
    previousCategory: 'air-brakes-3'
  },

  // Combination Vehicle Tests
  {
    id: 'combination-1',
    name: 'Combination Vehicle Test 1',
    description: 'Basic combination vehicle operation and control.',
    state: 'HI',
    nextCategory: 'combination-2',
    previousCategory: 'air-brakes-4'
  },
  {
    id: 'combination-2',
    name: 'Combination Vehicle Test 2',
    description: 'Coupling and uncoupling procedures.',
    state: 'HI',
    nextCategory: 'combination-3',
    previousCategory: 'combination-1'
  },
  {
    id: 'combination-3',
    name: 'Combination Vehicle Test 3',
    description: 'Combination vehicle safety and inspection.',
    state: 'HI',
    nextCategory: 'combination-4',
    previousCategory: 'combination-2'
  },
  {
    id: 'combination-4',
    name: 'Combination Vehicle Test 4',
    description: 'Advanced combination vehicle maneuvers.',
    state: 'HI',
    nextCategory: 'combination-5',
    previousCategory: 'combination-3'
  },
  {
    id: 'combination-5',
    name: 'Combination Vehicle Test 5',
    description: 'Emergency procedures and troubleshooting.',
    state: 'HI',
    nextCategory: 'hazmat-1',
    previousCategory: 'combination-4'
  },

  // Hazardous Materials Tests
  {
    id: 'hazmat-1',
    name: 'Hazardous Materials Test 1',
    description: 'Basic hazmat regulations and classifications.',
    state: 'HI',
    nextCategory: 'hazmat-2',
    previousCategory: 'combination-5'
  },
  {
    id: 'hazmat-2',
    name: 'Hazardous Materials Test 2',
    description: 'Hazmat handling and transportation procedures.',
    state: 'HI',
    nextCategory: 'hazmat-3',
    previousCategory: 'hazmat-1'
  },
  {
    id: 'hazmat-3',
    name: 'Hazardous Materials Test 3',
    description: 'Emergency response and spill procedures.',
    state: 'HI',
    nextCategory: 'hazmat-4',
    previousCategory: 'hazmat-2'
  },
  {
    id: 'hazmat-4',
    name: 'Hazardous Materials Test 4',
    description: 'Advanced hazmat regulations and safety procedures.',
    state: 'HI',
    nextCategory: 'tanker-1',
    previousCategory: 'hazmat-3'
  },

  // Tanker Vehicle Tests
  {
    id: 'tanker-1',
    name: 'Tanker Vehicle Test 1',
    description: 'Basic tanker vehicle operation and control.',
    state: 'HI',
    nextCategory: 'tanker-2',
    previousCategory: 'hazmat-4'
  },
  {
    id: 'tanker-2',
    name: 'Tanker Vehicle Test 2',
    description: 'Liquid surge and braking procedures.',
    state: 'HI',
    nextCategory: 'tanker-3',
    previousCategory: 'tanker-1'
  },
  {
    id: 'tanker-3',
    name: 'Tanker Vehicle Test 3',
    description: 'Loading, unloading, and emergency procedures.',
    state: 'HI',
    nextCategory: 'doubles-triples-1',
    previousCategory: 'tanker-2'
  },

  // Doubles/Triples Tests
  {
    id: 'doubles-triples-1',
    name: 'Doubles/Triples Test 1',
    description: 'Basic doubles and triples operation.',
    state: 'HI',
    nextCategory: 'doubles-triples-2',
    previousCategory: 'tanker-3'
  },
  {
    id: 'doubles-triples-2',
    name: 'Doubles/Triples Test 2',
    description: 'Coupling and uncoupling procedures.',
    state: 'HI',
    nextCategory: 'doubles-triples-3',
    previousCategory: 'doubles-triples-1'
  },
  {
    id: 'doubles-triples-3',
    name: 'Doubles/Triples Test 3',
    description: 'Advanced operation and safety procedures.',
    state: 'HI',
    nextCategory: 'passenger-1',
    previousCategory: 'doubles-triples-2'
  },

  // Passenger Transport Tests
  {
    id: 'passenger-1',
    name: 'Passenger Transport Test 1',
    description: 'Basic passenger vehicle operation.',
    state: 'HI',
    nextCategory: 'passenger-2',
    previousCategory: 'doubles-triples-3'
  },
  {
    id: 'passenger-2',
    name: 'Passenger Transport Test 2',
    description: 'Passenger safety and emergency procedures.',
    state: 'HI',
    nextCategory: 'passenger-3',
    previousCategory: 'passenger-1'
  },
  {
    id: 'passenger-3',
    name: 'Passenger Transport Test 3',
    description: 'Loading and unloading procedures.',
    state: 'HI',
    nextCategory: 'passenger-4',
    previousCategory: 'passenger-2'
  },
  {
    id: 'passenger-4',
    name: 'Passenger Transport Test 4',
    description: 'Advanced passenger transport operations.',
    state: 'HI',
    nextCategory: 'school-bus-1',
    previousCategory: 'passenger-3'
  },

  // School Bus Tests
  {
    id: 'school-bus-1',
    name: 'School Bus Test 1',
    description: 'Basic school bus operation and safety.',
    state: 'HI',
    nextCategory: 'school-bus-2',
    previousCategory: 'passenger-4'
  },
  {
    id: 'school-bus-2',
    name: 'School Bus Test 2',
    description: 'Student loading and unloading procedures.',
    state: 'HI',
    nextCategory: 'school-bus-3',
    previousCategory: 'school-bus-1'
  },
  {
    id: 'school-bus-3',
    name: 'School Bus Test 3',
    description: 'Emergency procedures and student management.',
    state: 'HI',
    nextCategory: 'school-bus-4',
    previousCategory: 'school-bus-2'
  },
  {
    id: 'school-bus-4',
    name: 'School Bus Test 4',
    description: 'Advanced school bus operations and regulations.',
    state: 'HI',
    nextCategory: 'pre-trip-1',
    previousCategory: 'school-bus-3'
  },

  // Pre-Trip Inspection Tests
  {
    id: 'pre-trip-1',
    name: 'Pre-Trip Inspection Test 1',
    description: 'Basic vehicle inspection procedures.',
    state: 'HI',
    nextCategory: 'pre-trip-2',
    previousCategory: 'school-bus-4'
  },
  {
    id: 'pre-trip-2',
    name: 'Pre-Trip Inspection Test 2',
    description: 'Advanced inspection techniques.',
    state: 'HI',
    nextCategory: 'pre-trip-3',
    previousCategory: 'pre-trip-1'
  },
  {
    id: 'pre-trip-3',
    name: 'Pre-Trip Inspection Test 3',
    description: 'Comprehensive vehicle systems inspection.',
    state: 'HI',
    nextCategory: null,
    previousCategory: 'pre-trip-2'
  }
];