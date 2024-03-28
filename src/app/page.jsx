import Form from '@/app/form'
import types from '@/types'

/**
 * Fetches trivia categories from the Open Trivia Database API.
 * @returns {Promise<types.TriviaData>}
 */
async function getCategories() {
  const res = await fetch('https://opentdb.com/api_category.php')

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch categories')
  }

  return res.json()
}

export default async function HomePage() {
  const categories = await getCategories()

  return (
    <main>
      <Form categories={categories.trivia_categories} />
    </main>
  )
}
