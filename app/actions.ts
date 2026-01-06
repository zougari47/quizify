'use server';

import { sessions } from '@/lib/utils';

export async function checkAnswer(
  sessionId: string,
  question: string,
  answer: string
): Promise<{ isCorrect: boolean; correctAnswer?: string }> {
  const session = sessions.find((s) => s.id === sessionId);
  if (!session) return { isCorrect: false };

  const q = session.questions.find((q) => q.q === question);
  if (!q) return { isCorrect: false };

  if (answer === q.a) {
    return { isCorrect: true, correctAnswer: q.a };
  }

  return { isCorrect: false, correctAnswer: q.a };
}
