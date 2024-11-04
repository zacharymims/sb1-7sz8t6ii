import { Question } from '../../../../types';

export const texasPassenger3: Question[] = [
  {
    id: 'pass3-1',
    question: 'When, according to the pupil transportation operation and safety rules, are the four-way hazard lights supposed to be used?',
    answers: [
      'When loading or unloading students',
      'Only during emergencies',
      'Only at railroad crossings',
      'Whenever the bus stops'
    ],
    correctAnswers: ['When loading or unloading students'],
    explanation: 'The four-way hazard lights should be used when loading or unloading students to alert other drivers of the bus\'s presence and ensure safety.',
    questionTag: 'passenger vehicle3'
  },
  {
    id: 'pass3-2',
    question: 'When is the only time the red warning lights can be used?',
    answers: [
      'During loading or unloading',
      'When parked',
      'In emergencies',
      'At railroad crossings'
    ],
    correctAnswers: ['During loading or unloading'],
    explanation: 'The red warning lights can only be used during the loading or unloading of students to indicate that it is unsafe for others to pass the bus.',
    questionTag: 'passenger vehicle3'
  }
  // Add more passenger test 3 questions
];