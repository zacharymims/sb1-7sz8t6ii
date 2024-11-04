export interface Question {
  id: string;
  question: string;
  answers: string[];
  correctAnswers: string[];
  explanation?: string;
  questionTag: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  state: string;
  nextCategory: string | null;
  previousCategory: string | null;
}

export interface QuizState {
  currentQuestionIndex: number;
  correctAnswersCount: number;
  questionsAnswered: string[];
  mistakesMade: { question: string; correctAnswers: string[] }[];
  selectedAnswer: string;
  showResult: boolean;
  isCorrect: boolean;
  quizCompleted: boolean;
  hasStarted: boolean;
}

export interface QuizConfig {
  totalQuestions: number;
  maxMistakesAllowed: number;
  passingScore: number;
}