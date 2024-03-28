import { CircleX } from 'lucide-react'
import { Circle } from 'lucide-react'
import { CheckCircle2 } from 'lucide-react'

/**
 * @param {object} props
 * @param {string} props.answer
 * @param {string} props.name
 * @param {string} props.selectedAnswer
 * @param {string} props.correct_answer
 * @param {boolean} props.hasAnswered
 * @param {void} props.onAnswerChange
 * @returns {JSX.Element}
 */
const Answer = ({
  answer,
  name,
  selectedAnswer,
  hasAnswered,
  correct_answer,
  onAnswerChange,
}) => {
  const id = answer?.replace(/[^\w\s]/gi, '').replace(/\s+/g, '')

  console.log({ answer, correct_answer })

  return (
    <label
      for={id}
      className='text-[rgb(0, 10, 56)] relative z-0 mt-4 flex w-full items-center gap-4 p-4 text-lg font-medium'>
      <input
        type='radio'
        id={id}
        checked={answer === selectedAnswer}
        name={name}
        hidden
        onChange={(e) => onAnswerChange(answer)}
      />

      {hasAnswered ? (
        answer === correct_answer ? (
          <CheckCircle2
            className='h-9 w-9 text-gray-300 transition duration-500 ease-in-out [&>path]:text-white'
            fill='green'
          />
        ) : (
          <CircleX
            className='h-9 w-9 text-gray-300 transition duration-500 ease-in-out [&>path]:text-white'
            fill='red'
          />
        )
      ) : answer === selectedAnswer ? (
        <CheckCircle2
          className='h-9 w-9 text-gray-300 transition duration-500 ease-in-out [&>path]:text-white'
          fill='#4a00ff'
        />
      ) : (
        <Circle className='h-9 w-9 cursor-pointer text-gray-300 transition duration-500 ease-in-out [&>path]:text-white' />
      )}

      {/* label container */}
      {answer === selectedAnswer ||
      (hasAnswered && answer === correct_answer) ? (
        <div className='absolute inset-0 z-[-1] h-full w-full rounded-full bg-[#e9e9e9] peer-checked:block' />
      ) : null}

      {answer}
    </label>
  )
}

export default Answer
