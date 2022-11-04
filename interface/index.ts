interface ICategory {
  id: number
  name: string
}

interface IDifficulty {}

interface IHomePageProps {
  categories: ICategory[]
  difficulty: string[]
  types: string[]
}

interface IQuizPageInterface {
  paramsReceivedSuccessfully: boolean
}

interface IFormOptions {
  questionNumber: number
  category: string
  type: string
  difficulty: string
}

export type { ICategory, IHomePageProps, IFormOptions }
