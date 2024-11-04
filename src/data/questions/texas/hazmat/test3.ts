import { Question } from '../../../../types';

export const texasHazmat3: Question[] = [
  {
    id: 'hm3-1',
    question: 'When fueling a placarded vehicle, what must someone always do?',
    answers: [
      'Stand back',
      'Monitor the process',
      'Keep the engine running',
      'Wear gloves'
    ],
    correctAnswers: ['Monitor the process'],
    explanation: 'It is essential to have someone monitor the fueling process to ensure safety and respond to any emergencies that may arise during refueling.',
    questionTag: 'tx hazmat3'
  },
  {
    id: 'hm3-2',
    question: 'What is Chemtrec\'s primary job?',
    answers: [
      'Provide emergency response',
      'Train drivers',
      'Certify shipments',
      'Inspect facilities'
    ],
    correctAnswers: ['Provide emergency response'],
    explanation: 'Chemtrec (Chemical Transportation Emergency Center) primarily provides emergency response information and support for hazardous materials incidents.',
    questionTag: 'tx hazmat3'
  }
  // Add more hazmat test 3 questions
];