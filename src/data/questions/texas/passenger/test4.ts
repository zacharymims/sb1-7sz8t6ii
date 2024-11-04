import { Question } from '../../../../types';

export const texasPassenger4: Question[] = [
  {
    id: 'pass4-1',
    question: 'Which of these statements about speed management and braking is true?',
    answers: [
      'Slower speeds are safer',
      'Braking is optional',
      'Speeding is necessary',
      'All speeds are safe'
    ],
    correctAnswers: ['Slower speeds are safer'],
    explanation: 'Managing speed by driving slower is generally safer, especially in adverse conditions, allowing more time to react to hazards.',
    questionTag: 'passenger vehicle4'
  },
  {
    id: 'pass4-2',
    question: 'You do not have to stop _________, but you must slow down and check for other vehicles.',
    answers: [
      'At stop signs',
      'At railroad crossings',
      'In residential areas',
      'At traffic lights'
    ],
    correctAnswers: ['At railroad crossings'],
    explanation: 'You do not have to stop at railroad crossings if the tracks are clear but must slow down to check for any oncoming trains or hazards.',
    questionTag: 'passenger vehicle4'
  }
  // Add more passenger test 4 questions
];