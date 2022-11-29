export interface ICategory {
  id: number | string
  name: string
}

export interface IAnswerType extends ICategory {}

export interface IDifficulty extends ICategory {}
