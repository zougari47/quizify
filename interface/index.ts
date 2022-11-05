// ****** Pages ******
interface IHomePageProps {
  categories: ICategory[]
  difficulties: IDifficulty[]
  types: IAnswerType[]
}

interface IResultPageProps {
  result: string
}

// ****** Component ******
interface IQuestionComponentProps {
  question: string
  number: number
  correctAnswer: string
  falseAnswers: string[]
  questionsCount: number
  score: number
  nextQuestion: () => void
  updateScore: () => void
}

interface IFormOptions {
  questionNumber: number
  category: string
  type: string
  difficulty: string
}

// ****** API ******
interface ICategory {
  id: number | string
  name: string
}

interface IAnswerType extends ICategory {}

interface IDifficulty extends ICategory {}

export type {
  ICategory,
  IHomePageProps,
  IFormOptions,
  IQuestionComponentProps,
  IResultPageProps
}
