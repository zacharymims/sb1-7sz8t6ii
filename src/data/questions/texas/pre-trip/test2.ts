import { Question } from '../../../../types';

export const texasPreTrip2: Question[] = [
  {
    id: 'pt2-1',
    question: 'Which of the following should not be checked at the side of the cab during a pre-trip?',
    answers: ['Fuel tank', 'Air tank', 'Steps', 'Mirrors'],
    correctAnswers: ['Steps'],
    explanation: 'Steps are typically checked later in the inspection process rather than at the cab\'s side.',
    questionTag: 'pre trip2'
  },
  {
    id: 'pt2-2',
    question: 'What do fuel and air tanks have in common regarding inspection items?',
    answers: ['Same items', 'Different items', 'Only visual checks', 'Only functional checks'],
    correctAnswers: ['Same items'],
    explanation: 'Both fuel and air tanks require similar checks, such as for leaks and structural integrity.',
    questionTag: 'pre trip2'
  }
  // Add more pre-trip test 2 questions
];