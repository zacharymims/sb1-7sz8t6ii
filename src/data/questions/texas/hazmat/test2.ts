import { Question } from '../../../../types';

export const texasHazmat2: Question[] = [
  {
    id: 'hm2-1',
    question: 'If an "X" or "RQ" appears in the HM column of a shipping paper entry, what does it signify?',
    answers: [
      'A serious hazard',
      'A restricted quantity',
      'A regulated quantity',
      'A non-hazardous material'
    ],
    correctAnswers: ['A regulated quantity'],
    explanation: 'An "X" or "RQ" indicates the material is subject to specific regulations and may require additional handling precautions.',
    questionTag: 'tx hazmat2'
  },
  {
    id: 'hm2-2',
    question: 'What should you do in the event of a hazardous materials emergency?',
    answers: [
      'Evacuate the area',
      'Call 911',
      'Use the emergency response guide',
      'Contain the leak'
    ],
    correctAnswers: ['Use the emergency response guide'],
    explanation: 'In a hazardous materials emergency, using the emergency response guide helps you understand the proper steps to take for safety and containment.',
    questionTag: 'tx hazmat2'
  }
  // Add more hazmat test 2 questions
];