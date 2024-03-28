'use client'

import { useState, useRef, useEffect } from 'react'
import { decode } from 'html-entities'
import { ArrowRightIcon } from 'lucide-react'
import types from '@/types'
import Answer from './answer'

/**
 * @param {object} props
 * @param {types.Quiz} props.quizData
 * @param {number} props.number
 * @param {void} props.updateScore
 * @param {void} props.next
 * @returns {JSX.Element}
 */
const Quiz = ({ quizData, number, updateScore, next }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [hasAnswered, setHasAnswered] = useState(false)

  const { question, correct_answer, incorrect_answers } = quizData
  const name = quizData.question.replace(/[^\w\s]/gi, '').replace(/\s+/g, '')
  const [answers, shuffleAnswer] = useState(
    [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5),
  )

  useEffect(() => {
    shuffleAnswer(
      [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5),
    )
    setSelectedAnswer('')
  }, [correct_answer])

  const onAnswerChange = (answer) => setSelectedAnswer(answer)

  const onSubmit = () => {
    setHasAnswered(true)

    if (selectedAnswer === decode(correct_answer)) {
      updateScore((prev) => prev + 1)
    }

    setTimeout(() => {
      next()
      setHasAnswered(false)
    }, 1200)
  }

  return (
    <div className='card w-11/12 max-w-[600px] bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='bg-primary-muted card-title text-2xl'>
          Question {number}
        </h2>
        <div>
          <p className='text-xl'>{decode(question)}</p>

          <div>
            {answers
              .map((a) => decode(a))
              .map((answer, i) => (
                <Answer
                  answer={answer}
                  onAnswerChange={onAnswerChange}
                  hasAnswered={hasAnswered}
                  name={name}
                  selectedAnswer={selectedAnswer}
                  correct_answer={decode(correct_answer)}
                  key={`answer${i}`}
                />
              ))}
          </div>
        </div>
        <div className='card-actions mt-4 justify-end'>
          <button
            className='btn btn-primary text-lg'
            disabled={hasAnswered}
            onClick={onSubmit}>
            Next
            <ArrowRightIcon className='h-5 w-5' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Quiz
