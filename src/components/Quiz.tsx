import React, { useState, useEffect } from 'react';
import { Question, QuizState } from '../types';
import { QuizProgress } from './QuizProgress';
import { QuestionCard } from './QuestionCard';
import { ResultMessage } from './ResultMessage';
import { QuizComplete } from './QuizComplete';
import { ActionButtons } from './ActionButtons';
import { Breadcrumbs } from './Breadcrumbs';
import { CategoryNavigation } from './CategoryNavigation';
import { JobOpportunityModal } from './JobOpportunityModal';
import { states } from '../data/states';
import { texasQuestions } from '../data/questions/texas';

interface QuizProps {
  stateCode: string;
  categoryId: string;
  onBack: () => void;
}

export const Quiz: React.FC<QuizProps> = ({ stateCode, categoryId, onBack }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    correctAnswersCount: 0,
    questionsAnswered: [],
    mistakesMade: [],
    selectedAnswer: '',
    showResult: false,
    isCorrect: false,
    quizCompleted: false,
    hasStarted: true
  });
  const [showJobModal, setShowJobModal] = useState(false);

  const state = states.find(s => s.code === stateCode);
  const category = state?.categories.find(c => c.id === categoryId);

  useEffect(() => {
    if (categoryId && texasQuestions.generalKnowledge[categoryId]) {
      const categoryQuestions = texasQuestions.generalKnowledge[categoryId];
      setQuestions(categoryQuestions);
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: 0,
        correctAnswersCount: 0,
        questionsAnswered: [],
        mistakesMade: [],
        selectedAnswer: '',
        showResult: false,
        isCorrect: false,
        quizCompleted: false,
        hasStarted: true
      }));
    }
  }, [categoryId]);

  const handleAnswerSelect = (answer: string) => {
    setQuizState(prev => ({
      ...prev,
      selectedAnswer: answer
    }));
  };

  const handleAnswerSubmit = () => {
    const currentQuestion = questions[quizState.currentQuestionIndex];
    const isAnswerCorrect = currentQuestion.correctAnswers.includes(quizState.selectedAnswer);

    setQuizState(prev => ({
      ...prev,
      isCorrect: isAnswerCorrect,
      showResult: true,
      correctAnswersCount: isAnswerCorrect ? prev.correctAnswersCount + 1 : prev.correctAnswersCount,
      mistakesMade: isAnswerCorrect ? prev.mistakesMade : [
        ...prev.mistakesMade,
        {
          question: currentQuestion.question,
          correctAnswers: currentQuestion.correctAnswers
        }
      ],
      questionsAnswered: [...prev.questionsAnswered, currentQuestion.question]
    }));
  };

  const handleNextQuestion = () => {
    if (quizState.currentQuestionIndex < questions.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        selectedAnswer: '',
        showResult: false
      }));
    } else {
      setQuizState(prev => ({
        ...prev,
        quizCompleted: true
      }));
      setShowJobModal(true);
    }
  };

  const handleRestartQuiz = () => {
    setQuizState({
      currentQuestionIndex: 0,
      correctAnswersCount: 0,
      questionsAnswered: [],
      mistakesMade: [],
      selectedAnswer: '',
      showResult: false,
      isCorrect: false,
      quizCompleted: false,
      hasStarted: true
    });
  };

  if (!state || !category || questions.length === 0) {
    return null;
  }

  const currentQuestion = questions[quizState.currentQuestionIndex];
  const quizConfig = {
    totalQuestions: questions.length,
    maxMistakesAllowed: Math.floor(questions.length * 0.2),
    passingScore: 80
  };

  const hasFailed = quizState.mistakesMade.length >= quizConfig.maxMistakesAllowed;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <Breadcrumbs
            currentQuestion={quizState.currentQuestionIndex}
            totalQuestions={questions.length}
            hasStarted={quizState.hasStarted}
            isCompleted={quizState.quizCompleted || hasFailed}
            stateName={state.name}
            categoryName={category.name}
            onStateClick={onBack}
          />

          {!quizState.quizCompleted && !hasFailed ? (
            <>
              <QuizProgress
                currentQuestion={quizState.currentQuestionIndex}
                totalQuestions={quizConfig.totalQuestions}
                mistakesMade={quizState.mistakesMade.length}
                maxMistakes={quizConfig.maxMistakesAllowed}
              />

              <div className="mt-8">
                <QuestionCard
                  question={currentQuestion}
                  selectedAnswer={quizState.selectedAnswer}
                  onAnswerSelect={handleAnswerSelect}
                />
              </div>

              {quizState.showResult && (
                <div className="mt-6">
                  <ResultMessage
                    isCorrect={quizState.isCorrect}
                    correctAnswer={currentQuestion.correctAnswers.join(', ')}
                    explanation={currentQuestion.explanation}
                  />
                </div>
              )}

              <div className="mt-8">
                <ActionButtons
                  showResult={quizState.showResult}
                  selectedAnswer={quizState.selectedAnswer}
                  onSubmit={handleAnswerSubmit}
                  onNext={handleNextQuestion}
                />
              </div>
            </>
          ) : (
            <QuizComplete
              correctAnswers={quizState.correctAnswersCount}
              totalQuestions={quizConfig.totalQuestions}
              hasFailed={hasFailed}
              onRestart={handleRestartQuiz}
            />
          )}

          {(quizState.quizCompleted || hasFailed) && category && (
            <CategoryNavigation
              currentCategory={category}
              onNavigate={(categoryId) => {
                setQuizState(prev => ({
                  ...prev,
                  currentQuestionIndex: 0,
                  correctAnswersCount: 0,
                  questionsAnswered: [],
                  mistakesMade: [],
                  selectedAnswer: '',
                  showResult: false,
                  isCorrect: false,
                  quizCompleted: false,
                  hasStarted: true
                }));
                window.scrollTo(0, 0);
              }}
            />
          )}
        </div>
      </div>

      <JobOpportunityModal
        isOpen={showJobModal}
        onClose={() => setShowJobModal(false)}
      />
    </div>
  );
};