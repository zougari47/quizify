'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { TriviaCategory } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

type Props = {
  categories: TriviaCategory[];
};

export function QuizForm({ categories }: Props) {
  const router = useRouter();
  const [state, setState] = useState({
    amount: 10,
    difficulty: '',
    type: '',
    cat: '',
  });

  useEffect(() => {
    const params = new URLSearchParams();
    if (state.amount >= 3 && state.amount <= 20)
      params.set('amount', state.amount.toString());
    if (['easy', 'medium', 'hard'].includes(state.difficulty))
      params.set('difficulty', state.difficulty);
    if (['multiple', 'boolean'].includes(state.type))
      params.set('type', state.type);
    if (state.cat) params.set('category', state.cat);
  }, [state]);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const params = new URLSearchParams({
      amount: String(state.amount),
      ...(state.difficulty && { difficulty: state.difficulty }),
      ...(state.type && { type: state.type }),
      ...(state.cat && { category: state.cat }),
    });

    router.push(`/play?${params.toString()}`);
  }

  return (
    <Card className='w-full max-w-md mx-auto mt-12'>
      <CardHeader>
        <CardTitle>Choose Quiz Options</CardTitle>
        <CardDescription>
          Select category, difficulty, type, and number of questions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className='flex flex-col gap-4'
          id='quiz-form'
          onSubmit={onSubmit}
        >
          {/* Category */}
          <div className='grid gap-2'>
            <Label htmlFor='category'>Category</Label>
            <Select
              onValueChange={(val) => setState((s) => ({ ...s, cat: val }))}
            >
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Any Category' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  {categories.map((c) => (
                    <SelectItem key={c.id} value={c.id.toString()}>
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Difficulty */}
          <div className='grid gap-2'>
            <Label htmlFor='difficulty'>Difficulty</Label>
            <Select
              onValueChange={(val) =>
                setState((s) => ({
                  ...s,
                  difficulty: ['easy', 'medium', 'hard'].includes(val)
                    ? val
                    : '',
                }))
              }
            >
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Any' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Difficulty</SelectLabel>
                  <SelectItem value='easy'>Easy</SelectItem>
                  <SelectItem value='medium'>Medium</SelectItem>
                  <SelectItem value='hard'>Hard</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Type */}
          <div className='grid gap-2'>
            <Label htmlFor='type'>Type</Label>
            <Select
              onValueChange={(val) =>
                setState((s) => ({
                  ...s,
                  type: ['multiple', 'boolean'].includes(val) ? val : '',
                }))
              }
            >
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Any' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Type</SelectLabel>
                  <SelectItem value='multiple'>Multiple Choice</SelectItem>
                  <SelectItem value='boolean'>True / False</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Number of Questions */}
          <div className='grid gap-2'>
            <Label htmlFor='amount'>Number of Questions</Label>
            <Input
              id='amount'
              type='number'
              min={3}
              max={20}
              value={state.amount}
              onChange={(e) =>
                setState((s) => ({
                  ...s,
                  amount: parseInt(e.target.value) || 10,
                }))
              }
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className='w-full' type='submit' form='quiz-form'>
          Start
        </Button>
      </CardFooter>
    </Card>
  );
}
