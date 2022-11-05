import axios from 'axios'
import { decode } from 'html-entities'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Question from '../../components/Question/Question'

interface IQuizPageProps {
  questionsList: any[]
}

const QuizPage: NextPage<IQuizPageProps> = ({ questionsList }) => {
  const [gameScore, setGameScore] = useState(0)
  const [currentQuestionIndex, SetCurrentQuestionIndex] = useState(1)
  const questionsCount = questionsList?.length ?? 0
  const targetQuestion = questionsList?.find(
    (Q, index) => index === currentQuestionIndex - 1
  )

  const nextQuestion = () => SetCurrentQuestionIndex(x => x + 1)

  const updateScore = () => setGameScore(s => s + 1)

  return (
    <>
      <Question
        key={currentQuestionIndex}
        number={currentQuestionIndex}
        question={decode(targetQuestion?.question)}
        correctAnswer={decode(targetQuestion?.correct_answer)}
        falseAnswers={targetQuestion?.incorrect_answers?.map((a: string) =>
          decode(a)
        )}
        nextQuestion={nextQuestion}
        questionsCount={questionsCount}
        score={gameScore}
        updateScore={updateScore}
      />
    </>
  )
}

export default QuizPage

export const getServerSideProps: GetServerSideProps = async context => {
  // if query.category === undefined (we don't get the query params) => redirect to home page
  if (!Boolean(context.query.category)) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const { questionNumber, category, type, difficulty } = context.query

  // make queries here !!
  const N = questionNumber
  const CAT = category !== '0' ? `&category=${category}` : ''
  const TYPE = type !== 'any' ? `&type=${type}` : ''
  const DIF = difficulty !== 'any' ? `&difficulty=${difficulty}` : ''

  const API = `https://opentdb.com/api.php?amount=${N + CAT + TYPE + DIF}`
  const questionsList = (await axios.get(API)).data.results

  console.log({ API, questionsList, questionNumber })

  return {
    props: { questionsList }
  }
}
