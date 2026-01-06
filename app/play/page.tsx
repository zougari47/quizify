import { randomUUID } from 'crypto';
import { TriviaResponse } from '@/lib/types';
import { sessions, shuffleArr } from '@/lib/utils';
import { ClientProvider } from '@/components/client-provider';

type PlayPageProps = {
  searchParams: Promise<{
    amount?: string;
    difficulty?: string;
    type?: string;
    category?: string;
  }>;
};

const allowedDifficulties = ['easy', 'medium', 'hard'] as const;

const allowedTypes = ['multiple', 'boolean'] as const;

export default async function PlayPage({ searchParams }: PlayPageProps) {
  const sp = await searchParams;

  // Validate amount (3–20, default 5)
  const parsed = Number(sp.amount);
  const amount =
    Number.isInteger(parsed) && parsed >= 3 && parsed <= 20 ? parsed : 5;

  // Validate difficulty
  const difficulty =
    allowedDifficulties.find((d) => d === sp.difficulty) ?? null;

  // Validate type
  const type = allowedTypes.find((t) => t === sp.type) ?? null;

  // Validate category
  const parsedCategory = Number(sp.category);
  const category =
    Number.isInteger(parsedCategory) &&
    parsedCategory >= 9 &&
    parsedCategory <= 32
      ? parsedCategory
      : null;

  // API
  const query = new URLSearchParams({
    ...(amount && { amount: String(amount) }),
    ...(difficulty && { difficulty }),
    ...(type && { type }),
    ...(category && { category: String(category) }),
  });

  let res: any;
  try {
    res = await fetch(`https://opentdb.com/api.php?${query.toString()}`);
    console.log({ res });
  } catch (err) {
    console.error(err);
  }
  const data: TriviaResponse = await res.json();
  const { results } = data;

  const sessionId = randomUUID();
  const QA = results.map((q) => ({ q: q.question, a: q.correct_answer }));
  sessions.push({
    id: sessionId,
    questions: QA,
  });

  const shuffledQs = results.map((q) => ({
    q: q.question,
    cat: q.category,
    difficulty: q.difficulty,
    answers: shuffleArr([q.correct_answer, ...q.incorrect_answers]),
  }));

  return (
    <>
      <ClientProvider sessionId={sessionId} questions={shuffledQs} />;
    </>
  );
}
