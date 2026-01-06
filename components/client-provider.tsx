'use client';
import { useState } from 'react';
import { QuestionCard } from './q-card';
import { checkAnswer } from '@/app/actions';
import GameOver from './game-over';

type ClientProviderProps = {
  questions: {
    q: string;
    cat: string;
    difficulty: string;
    answers: string[];
  }[];
  sessionId: string;
};

export function ClientProvider({ questions, sessionId }: ClientProviderProps) {
  const [state, setState] = useState({
    score: 0,
    gameOver: false,
    currentQ: 0, // index of the current question
    correctAnswer: '',
  });

  const handleAnswer = async (answer: string) => {
    const { isCorrect, correctAnswer } = await checkAnswer(
      sessionId,
      questions[state.currentQ].q,
      answer
    );

    setState((prev) => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      correctAnswer: correctAnswer ?? '',
    }));
  };

  const handleNext = () => {
    setState((prev) => ({
      ...prev,
      currentQ: prev.currentQ + 1,
      gameOver: prev.currentQ + 1 >= questions.length,
      correctAnswer: '',
    }));
  };

  if (state.gameOver) {
    return <GameOver score={state.score} total={questions.length} />;
  }

  const current = questions[state.currentQ];

  return (
    <QuestionCard
      q={current.q}
      cat={current.cat}
      difficulty={current.difficulty}
      answers={current.answers}
      correct_answer={state.correctAnswer}
      onAnswer={handleAnswer}
      onNext={handleNext}
    />
  );
}
