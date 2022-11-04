// import Head from 'next/head'
// import Image from 'next/image'
import Form from '../components/Form'
import { Container, Grid } from '@mui/material'
import { GetStaticProps, NextPage } from 'next'
import axios from 'axios'
import { IHomePageProps, ICategory } from '../interface'
// // import {} from 'node-html-parser'
// import { decode } from 'html-entities'

// *REVIEW - Margin for text filed component

const HomePage: NextPage<IHomePageProps> = ({
  categories,
  difficulty,
  types
}) => <Form categories={categories} difficulty={difficulty} types={types} />

export const getStaticProps: GetStaticProps = async () => {
  const CATEGORY_API = 'https://opentdb.com/api_category.php'
  const res = (await axios.get(CATEGORY_API)).data

  const categories: ICategory[] = [
    { id: 0, name: 'Any' },
    ...res.trivia_categories
  ]
  const difficulty = ['Any', 'Easy', 'Hard', 'Medium']
  const types = ['Any', 'True / False', 'Multiple Choice']

  return {
    props: {
      categories,
      difficulty,
      types
    } // will be passed to the page component as props
  }
}

export default HomePage
