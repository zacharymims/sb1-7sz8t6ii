import { Question } from '../../../../types';

export const texasTanker1: Question[] = [
  {
    id: 'tank1-1',
    question: 'You are driving a tank truck, and the front wheels begin to skid. Which of these is most likely to occur?',
    answers: [
      'A rollover',
      'No control of steering',
      'The back wheels will skid',
      'Increased stopping distance'
    ],
    correctAnswers: ['No control of steering'],
    explanation: 'When the front wheels skid, steering control is lost, which can lead to dangerous situations, especially in a large tank truck.',
    questionTag: 'tanker vehicle1'
  },
  {
    id: 'tank1-2',
    question: 'How far back does a helper stand when pumping or unloading liquids from a tanker?',
    answers: [
      '50 feet',
      '100 feet',
      '25 feet',
      '75 feet'
    ],
    correctAnswers: ['25 feet'],
    explanation: 'The helper should stand 25 feet away to ensure a safe distance during the unloading process.',
    questionTag: 'tanker vehicle1'
  }
  // Add more tanker test 1 questions
];