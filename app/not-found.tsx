import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className=''>
      <div className='absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]'>
        <div className='absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]'></div>
      </div>
      <Card className='w-4/5 max-w-md fixed top-1/2 left-1/2 -translate-1/2'>
        <CardContent className='pt-6'>
          <div className='text-center'>
            <div className='mb-6 flex justify-center'>
              <FileQuestion className='h-20 w-20 text-muted-foreground' />
            </div>
            <h1 className='mb-2 text-4xl font-bold text-foreground'>
              404 - Page Not Found
            </h1>
            <p className='mb-8 text-lg text-muted-foreground'>
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild size='lg'>
              <Link href='/'>Return Home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
