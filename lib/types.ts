export type TriviaCategory = {
  id: number;
  name: string;
};

export type TriviaCategoriesResponse = {
  trivia_categories: TriviaCategory[];
};

export type TriviaQuestion = {
  type: 'multiple' | 'boolean';
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type TriviaResponse = {
  response_code: number;
  results: TriviaQuestion[];
};

export type Question = {
  q: string;
  a: string;
};

export type Session = {
  id: string;
  questions: Question[];
};

export type SessionsMap = Map<string, Session>;
