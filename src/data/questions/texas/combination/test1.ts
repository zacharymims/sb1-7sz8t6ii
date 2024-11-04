import { Question } from '../../../../types';

export const texasCombination1: Question[] = [
  {
    id: 'comb1-1',
    question: 'Which answer is correct for the air valves when testing the trailer service brakes only?',
    answers: [
      'Apply the foot brake',
      'Release the parking brake',
      'Use the hand valve',
      'Disconnect the service line'
    ],
    correctAnswers: ['Use the hand valve'],
    explanation: 'The hand valve allows air to be applied only to the trailer service brakes, making it the correct way to test them without affecting tractor brakes.',
    questionTag: 'Combination CDL1'
  },
  {
    id: 'comb1-2',
    question: 'You are coupling a semi-trailer to your tractor but have not yet backed under. The trailer is at the right height when:',
    answers: [
      'The trailer is slightly higher than the fifth wheel',
      'The trailer is slightly lower than the fifth wheel',
      'Same height'
    ],
    correctAnswers: ['The trailer is slightly lower than the fifth wheel'],
    explanation: 'The trailer needs to be slightly lower so the fifth wheel can lift and lock onto the kingpin securely.',
    questionTag: 'Combination CDL1'
  }
  // Add more combination test 1 questions
];