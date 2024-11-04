import { Question } from '../../../../types';

export const texasPassenger1: Question[] = [
  {
    id: 'pass1-1',
    question: 'How should high beams be used while driving?',
    answers: [
      'Only in dark areas',
      'Whenever needed',
      'In foggy conditions',
      'All of the above'
    ],
    correctAnswers: ['Only in dark areas'],
    explanation: 'High beams should be used in dark areas to improve visibility without blinding other drivers.',
    questionTag: 'passenger vehicle1'
  },
  {
    id: 'pass1-2',
    question: 'What is the purpose of the safety release valve located on air tanks?',
    answers: [
      'To release excess pressure',
      'To refill air',
      'To monitor air quality',
      'To cool the tank'
    ],
    correctAnswers: ['To release excess pressure'],
    explanation: 'The safety release valve prevents over-pressurization of air tanks, ensuring safe operation.',
    questionTag: 'passenger vehicle1'
  }
  // Add more passenger test 1 questions
];