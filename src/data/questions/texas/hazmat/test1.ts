import { Question } from '../../../../types';

export const texasHazmat1: Question[] = [
  {
    id: 'hm1-1',
    question: 'What type of placard is required for an inhalation hazard load?',
    answers: [
      'Poison Gas',
      'Flammable',
      'Corrosive',
      'Oxidizer'
    ],
    correctAnswers: ['Poison Gas'],
    explanation: 'A "Poison Gas" placard is required for hazardous materials that pose an inhalation hazard.',
    questionTag: 'tx hazmat1'
  },
  {
    id: 'hm1-2',
    question: 'When should you avoid separating vehicles involved in a crash carrying explosives?',
    answers: [
      'Immediately after the crash',
      'Before police arrive',
      'Until cleared by officials',
      'When safe to move'
    ],
    correctAnswers: ['Until cleared by officials'],
    explanation: 'You should wait for officials\' clearance before pulling apart vehicles involved in an explosive material accident to avoid triggering further explosions.',
    questionTag: 'tx hazmat1'
  }
  // Add more hazmat test 1 questions
];