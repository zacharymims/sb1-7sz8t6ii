import { Question } from '../../../../types';

export const texasTanker2: Question[] = [
  {
    id: 'tank2-1',
    question: 'Separations between compartments inside tanks that have openings or holes in them are called?',
    answers: [
      'Baffles',
      'Bulkheads',
      'Surge walls',
      'Dividers'
    ],
    correctAnswers: ['Baffles'],
    explanation: 'Baffles have openings that allow liquid to flow between compartments while reducing the movement or surge of liquid inside the tank.',
    questionTag: 'tanker vehicle2'
  },
  {
    id: 'tank2-2',
    question: 'An emergency forces you to stop your tanker quickly or crash. You should:',
    answers: [
      'Swerve to avoid',
      'Use controlled braking',
      'Apply full brakes',
      'Pull over immediately'
    ],
    correctAnswers: ['Use controlled braking'],
    explanation: 'Controlled braking allows you to slow down the vehicle while maintaining control, preventing a rollover or skid when carrying liquid cargo.',
    questionTag: 'tanker vehicle2'
  }
  // Add more tanker test 2 questions
];