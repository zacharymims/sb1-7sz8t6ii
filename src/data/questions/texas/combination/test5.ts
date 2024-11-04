import { Question } from '../../../../types';

export const texasCombination5: Question[] = [
  {
    id: 'comb5-1',
    question: 'What are the colors of the emergency and service air lines on a combination vehicle?',
    answers: [
      'Blue and green',
      'Yellow and blue',
      'Red and blue',
      'Red and green'
    ],
    correctAnswers: ['Red and blue'],
    explanation: 'The emergency line is red, and the service line is blue, helping to prevent confusion during coupling.',
    questionTag: 'Combination CDL5'
  },
  {
    id: 'comb5-2',
    question: 'Why are low-clearance vehicles dangerous at railroad crossings?',
    answers: [
      'Less traction on tracks',
      'Clearance is too low',
      'Limited visibility',
      'Slower acceleration'
    ],
    correctAnswers: ['Clearance is too low'],
    explanation: 'Low-clearance vehicles can get stuck on railroad tracks due to the limited space between the vehicle and the ground.',
    questionTag: 'Combination CDL5'
  }
  // Add more combination test 5 questions
];