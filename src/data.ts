import { Question } from './types';

export const questions: Question[] = [
  {
    id: '1',
    question: 'How would you expect a truck with a cargo tank that has baffles to handle on the road?',
    answers: [
      'Less side surge',
      'Less forward surge',
      'No surge',
      'Both forward and side surge'
    ],
    correctAnswers: ['Less side surge'],
    explanation: 'Baffles reduce side-to-side surge but do not completely eliminate the forward and backward movement of the liquid, especially when braking or accelerating.',
    questionTag: 'tanker vehicle'
  },
  {
    id: '2',
    question: 'Separations between compartments inside tanks that have openings or holes in them are called?',
    answers: [
      'Baffles',
      'Bulkheads',
      'Surge walls',
      'Dividers'
    ],
    correctAnswers: ['Baffles'],
    explanation: 'Baffles have openings that allow liquid to flow between compartments while reducing the movement or surge of liquid inside the tank.',
    questionTag: 'tanker vehicle'
  },
  {
    id: '3',
    question: 'An emergency forces you to stop your tanker quickly or crash. You should:',
    answers: [
      'Swerve to avoid',
      'Use controlled braking',
      'Apply full brakes',
      'Pull over immediately'
    ],
    correctAnswers: ['Use controlled braking'],
    explanation: 'Controlled braking allows you to slow down the vehicle while maintaining control, preventing a rollover or skid when carrying liquid cargo.',
    questionTag: 'tanker vehicle'
  },
  {
    id: '4',
    question: 'The best way to take a curve with a tanker is to slow to a safe speed before entering the curve, then _____ as you go through it.',
    answers: [
      'Coast',
      'Brake hard',
      'Maintain speed',
      'Accelerate slowly'
    ],
    correctAnswers: ['Accelerate slowly'],
    explanation: 'It is best to slow down before a curve and gradually accelerate through it to avoid liquid surge or instability that could cause a rollover.',
    questionTag: 'tanker vehicle'
  },
  {
    id: '5',
    question: 'When loading a tanker that has 3 or 4 valves at the bottom of the tanker, you should have the valves?',
    answers: [
      'Open',
      'Closed',
      'Partially open',
      'Alternating open and closed'
    ],
    correctAnswers: ['Closed'],
    explanation: 'The valves at the bottom of the tanker should remain closed to prevent leaks and maintain control over the liquid cargo during transportation.',
    questionTag: 'tanker vehicle'
  }
];