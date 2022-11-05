import Form from '../components/Form'
import { GetStaticProps, NextPage } from 'next'
import axios from 'axios'
import { IHomePageProps, ICategory } from '../interface'

const HomePage: NextPage<IHomePageProps> = ({
  categories,
  difficulties,
  types
}) => <Form categories={categories} difficulties={difficulties} types={types} />

export const getStaticProps: GetStaticProps = async () => {
  const CATEGORY_API = 'https://opentdb.com/api_category.php'
  const res = (await axios.get(CATEGORY_API)).data

  // data
  const categories: ICategory[] = [
    { id: 0, name: 'Any' },
    ...res.trivia_categories
  ]
  const difficulties = [
    {
      id: 'any',
      name: 'Any'
    },
    {
      id: 'easy',
      name: 'Easy'
    },
    {
      id: 'medium',
      name: 'Medium'
    },
    {
      id: 'hard',
      name: 'Hard'
    }
  ]
  const types = [
    {
      id: 'any',
      name: 'Any'
    },
    {
      id: 'boolean',
      name: 'True / False'
    },
    {
      id: 'multiple',
      name: 'Multiple Choice'
    }
  ]

  return {
    props: {
      categories,
      difficulties,
      types
    }
  }
}

export default HomePage
