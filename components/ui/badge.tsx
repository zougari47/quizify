import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full border px-4 py-1 font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        easy: 'border-transparent bg-green-400/10 text-green-700 [a&]:hover:bg-green-400/20 focus-visible:ring-green-400/50',
        medium:
          'border-transparent bg-orange-400/10 text-orange-700 [a&]:hover:bg-orange-400/20 focus-visible:ring-orange-400/50',
        hard: 'border-transparent bg-rose-400/10 text-rose-700 [a&]:hover:bg-rose-400/20 focus-visible:ring-rose-400/50',
        cat: 'text-foreground border border-border',
      },
    },
    defaultVariants: {
      variant: 'easy',
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      data-slot='badge'
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
