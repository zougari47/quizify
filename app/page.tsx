import { QuizForm } from '@/components/form';
import { TriviaCategoriesResponse } from '@/lib/types';

export default async function Home() {
  const res = await fetch('https://opentdb.com/api_category.php', {
    cache: 'force-cache',
  });

  if (!res.ok) {
    // failed to load categories...
    return <div>Failed to load categories</div>;
  }

  const { trivia_categories: categories } =
    (await res.json()) as TriviaCategoriesResponse;

  return (
    <div className='text-xl text-center'>
      <QuizForm categories={categories} />
    </div>
  );
}
