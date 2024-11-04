import { Question } from '../../../../types';

export const texasSchoolBus1: Question[] = [
  {
    id: 'sb1-1',
    question: 'You need to evacuate your bus in an emergency; passengers should be directed to a safe place no less than _____ feet from the bus.',
    answers: ['10 feet', '15 feet', '20 feet', '25 feet'],
    correctAnswers: ['100 feet'],
    explanation: 'Passengers should be directed to a safe place no less than 100 feet from the bus to minimize the risk of injury from the bus or other traffic.',
    questionTag: 'school bus1'
  },
  {
    id: 'sb1-2',
    question: 'Off-tracking of the rear wheels is affected by:',
    answers: ['The speed of the bus', 'The turning radius', 'The weight of the bus', 'The type of tires'],
    correctAnswers: ['The turning radius'],
    explanation: 'Off-tracking of the rear wheels is primarily affected by the turning radius, as it determines how closely the rear wheels will follow the front wheels during a turn.',
    questionTag: 'school bus1'
  }
  // Add more school bus test 1 questions
];