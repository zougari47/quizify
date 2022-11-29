import axios from 'axios'
import { GetStaticProps, NextPage } from 'next'
import { useState } from 'react'
import Form from '../components/Form'
import Loader from '../components/Loader'
import { ICategory, IHomePageProps } from '../interface'

const HomePage: NextPage<IHomePageProps> = ({
  categories,
  difficulties,
  types
}) => {
  const [loading, setLoading] = useState(false)
  return (
    <>
      <Form
        categories={categories}
        difficulties={difficulties}
        types={types}
        showLoader={() => setLoading(true)}
      />
      <Loader loading={loading} />
    </>
  )
}

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
