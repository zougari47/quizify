export interface IQuestionComponentProps {
  question: string
  number: number
  correctAnswer: string
  falseAnswers: string[]
  questionsCount: number
  score: number
  nextQuestion: () => void
  updateScore: () => void
  showLoader: () => void
}

export interface IFormOptions {
  questionNumber: number
  category: string
  type: string
  difficulty: string
}
