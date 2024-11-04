import { Question } from '../../../../types';

export const texasHazmat4: Question[] = [
  {
    id: 'hm4-1',
    question: 'What must Class 1.1 explosives not be transported with in a combination vehicle?',
    answers: [
      'Flammable materials',
      'Corrosives',
      'Division 1.2 explosives',
      'Division 2.1 materials'
    ],
    correctAnswers: ['Division 1.2 explosives'],
    explanation: 'Class 1.1 explosives must not be transported with Division 1.2 explosives in a combination vehicle due to the increased risk of a detonation.',
    questionTag: 'tx hazmat4'
  },
  {
    id: 'hm4-2',
    question: 'How must a vehicle containing 500 pounds each of explosives 1.1 and 1.3 be handled?',
    answers: [
      'Use placards',
      'Treat as Division 1.2',
      'Store separately',
      'All of the above'
    ],
    correctAnswers: ['Use placards'],
    explanation: 'A vehicle carrying 500 pounds of both 1.1 and 1.3 explosives must use proper placarding to indicate the presence of hazardous materials.',
    questionTag: 'tx hazmat4'
  }
  // Add more hazmat test 4 questions
];