import ClientContainer from './client-container'
import types from '@/types'

export const dynamic = 'force-dynamic'

/**
 * Fetches Quizzes from the Open Trivia Database API
 * @param {object} searchParams
 * @param {number} searchParams.amount
 * @param {string} searchParams.category
 * @param {string} searchParams.difficulty
 * @param {string} searchParams.type
 * @returns {Promise<{response_code:number,results:types.Quiz[]}>}
 */
async function getQuizzes(searchParams = { amount: 5 }) {
  const filteredParams = Object.fromEntries(
    Object.entries(searchParams).filter(([, value]) => value !== 'any'),
  )

  const res = await fetch(
    `https://opentdb.com/api.php?${new URLSearchParams(filteredParams).toString()}`,
  )

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch quizzes')
  }

  return res.json()
}

const QuizPage = async ({ searchParams }) => {
  const quizzes = await getQuizzes(searchParams)

  return <ClientContainer quizzes={quizzes.results} />
}

export default QuizPage
