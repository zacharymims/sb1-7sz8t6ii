import { Question } from '../../../../types';

export const texasTanker3: Question[] = [
  {
    id: 'tank3-1',
    question: 'If you do not have an automatic tank drain, when should you drain your air tanks?',
    answers: [
      'After each shift',
      'Weekly',
      'Monthly',
      'Quarterly'
    ],
    correctAnswers: ['After each shift'],
    explanation: 'Draining air tanks after each shift prevents moisture buildup, reducing the risk of freezing or brake system malfunction.',
    questionTag: 'tanker vehicle3'
  },
  {
    id: 'tank3-2',
    question: 'Exactly how should you inspect your tank vehicle?',
    answers: [
      'Carefully',
      'Quickly',
      'Thoroughly',
      'Partially'
    ],
    correctAnswers: ['Thoroughly'],
    explanation: 'A thorough inspection of the tank vehicle is crucial for identifying any leaks, issues with brakes, and ensuring safe operation.',
    questionTag: 'tanker vehicle3'
  }
  // Add more tanker test 3 questions
];