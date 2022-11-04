import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Question from '../../components/Question/Question'

interface IQuizPageInterface {
  paramsReceivedSuccessfully: boolean
}

const QuizPage: NextPage = () => {
  const [gameScore, setGameScore] = useState(0)
  return (
    <Question
      question="what is your name?"
      number={1}
      correctAnswer="ahmed"
      falseAnswers={['a', 'b', 'c']}
    />
  )
}

export default QuizPage

export const getServerSideProps: GetServerSideProps = async context => {
  // if query.category === undefined (we don't get the query params)
  // if (!Boolean(context.query.category)) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   }
  // }

  // const { questionNumber, category, type, difficulty } = context.query

  // // make queries here !!
  // const N = questionNumber
  // const CAT = Boolean(category) ? category : ''
  // const TYPE = Boolean(type) ? type : ''
  // const DIF = Boolean(difficulty) ? difficulty : ''

  // console.log(context.query)
  return {
    props: {} // will be passed to the page component as props
  }
}

// *TODO - check if we received the params
