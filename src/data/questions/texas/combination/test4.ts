import { Question } from '../../../../types';

export const texasCombination4: Question[] = [
  {
    id: 'comb4-1',
    question: 'When should you back a tractor under a trailer during the coupling process?',
    answers: [
      'When air system is pressurized',
      'When brakes are locked',
      'After checking trailer alignment',
      'After coupling the air lines'
    ],
    correctAnswers: ['When air system is pressurized'],
    explanation: 'The air system must be fully pressurized before backing under a trailer to ensure proper brake operation.',
    questionTag: 'Combination CDL4'
  },
  {
    id: 'comb4-2',
    question: 'How do you confirm that the air lines are not crossed and the trailer brakes are working after supplying air to the trailer?',
    answers: [
      'Check trailer brakes by pulling forward',
      'Check air pressure gauge',
      'Listen for air leaks',
      'Pump the brake pedal'
    ],
    correctAnswers: ['Check trailer brakes by pulling forward'],
    explanation: 'After supplying air, gently pulling forward while applying the trailer brakes ensures the lines are not crossed and the brakes are functioning.',
    questionTag: 'Combination CDL4'
  }
  // Add more combination test 4 questions
];