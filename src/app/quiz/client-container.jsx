'use client'

// TODO
// - find solution for encoding
// - add animation
// - score bord
// - add icon to next button and try to change the color

import { useEffect, useState } from 'react'
import Quiz from './quiz'
import types from '@/types'
import ScoreBoard from './scoreboard'

/**
 * @param {object} props
 * @param {types.Quiz[]} props.quizzes
 * @returns {JSX.Element}
 */
const ClientContainer = ({ quizzes }) => {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return currentQuizIndex === quizzes.length ? (
    <ScoreBoard score={`${score}/${quizzes.length}`} />
  ) : (
    <Quiz
      number={currentQuizIndex + 1}
      quizData={quizzes[currentQuizIndex]}
      updateScore={setScore}
      next={() =>
        currentQuizIndex < quizzes.length &&
        setCurrentQuizIndex((prev) => prev + 1)
      }
    />
  )
}

export default ClientContainer
