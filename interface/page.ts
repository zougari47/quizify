import type { ICategory, IAnswerType, IDifficulty } from './api'

export interface IHomePageProps {
  categories: ICategory[]
  difficulties: IDifficulty[]
  types: IAnswerType[]
}

export interface IResultPageProps {
  result: string
}
