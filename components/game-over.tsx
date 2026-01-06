'use client';
import Link from 'next/link';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from './ui/button';

type GameOverProps = {
  score: number;
  total: number;
};

export default function GameOver({ score, total }: GameOverProps) {
  const { width, height } = useWindowSize();
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <Confetti width={width} height={height} />
      <Card className='w-4/5 max-w-sm text-center'>
        <CardHeader>
          <CardTitle className='text-2xl'>Game Over</CardTitle>
        </CardHeader>
        <CardContent className='text-lg'>
          Your Score: <span className='font-semibold'>{score}</span> / {total}
        </CardContent>
        <CardFooter>
          <Button asChild className='w-full' size='lg'>
            <Link href='/'>Play Again</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
function confetti(arg0: {
  particleCount: number;
  spread: number;
  origin: { y: number };
}) {
  throw new Error('Function not implemented.');
}
