'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import types from '@/types'

/**
 * @param {object} props
 * @param {types.TriviaCategory[]} props.categories
 * @returns {JSX.Element}
 */
const Form = ({ categories }) => {
  const router = useRouter()
  const [settings, setSettings] = useState({
    amount: '5',
    category: 'any',
    difficulty: 'any',
    type: 'any',
  })

  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title block text-center'>Customize The Quiz</h2>
        <div>
          {/* number questions */}
          <div className='mb-2'>
            <div className='label'>
              <span className='label-text'>Number of Questions:</span>
            </div>
            <input
              type='number'
              className='input input-bordered w-full'
              value={settings.amount}
              onChange={(e) =>
                setSettings((prev) => ({
                  ...prev,
                  amount: e.target.value,
                }))
              }
            />
          </div>

          {/* categories */}
          <div className='mb-2'>
            <div className='label'>
              <span className='label-text'>Category:</span>
            </div>
            <select
              className='select select-bordered w-full'
              onChange={(e) =>
                setSettings((prev) => ({
                  ...prev,
                  category: e.target.value,
                }))
              }>
              <option>Any Category</option>
              {categories.map((category) => (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* difficulties */}
          <div className='mb-2'>
            <div className='label'>
              <span className='label-text'>Difficulty</span>
            </div>
            <select
              className='select select-bordered w-full'
              onChange={(e) =>
                setSettings((prev) => ({
                  ...prev,
                  difficulty: e.target.value,
                }))
              }>
              {['any', 'easy', 'medium', 'hard'].map((difficulty) => (
                <option value={difficulty} key={difficulty}>
                  {difficulty === 'any'
                    ? 'Any Difficulty'
                    : difficulty.at(0).toUpperCase() + difficulty.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* question type */}
          <div className='mb-2'>
            <div className='label'>
              <span className='label-text'>Questions Type</span>
            </div>
            <select
              className='select select-bordered w-full'
              onChange={(e) =>
                setSettings((prev) => ({
                  ...prev,
                  type: e.target.value,
                }))
              }>
              <option value='any'>Any Type</option>
              <option value='multiple'>Multiple Choice</option>
              <option value='boolean'>True / False</option>
            </select>
          </div>
        </div>
        <div className='card-actions justify-end'>
          <button
            className='btn btn-primary'
            onClick={() =>
              router.push(`/quiz?${new URLSearchParams(settings).toString()}`)
            }>
            Start
          </button>
        </div>
      </div>
    </div>
  )
}

export default Form
