import { RotateCcw } from 'lucide-react'
import Link from 'next/link'

/**
 * @param {object} props
 * @param {string} props.score
 * @returns {JSX.Element}
 */
const ScoreBoard = ({ score }) => {
  return (
    <div className='card w-11/12 max-w-96 bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='bg-primary-muted card-title text-center text-2xl'>
          <span className='block w-full text-center'>
            Your Score is {score}
          </span>
        </h2>
        <div></div>
        <div className='card-actions mt-4 justify-center'>
          <Link href='/' className='btn btn-primary text-lg'>
            Play Again
            <RotateCcw className='h-5 w-5' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ScoreBoard
