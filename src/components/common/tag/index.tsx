import { VariantProps } from 'class-variance-authority';
import type { HTMLProps, PropsWithChildren } from 'react';

import { cn } from '@/libs/core';
import { Typography } from '../typography/Typography';
import { tagVariants } from './variants';

export type TagProps = HTMLProps<HTMLLabelElement> & VariantProps<typeof tagVariants>;

export const Tag = ({ variant, className, children, ...props }: PropsWithChildren<TagProps>) => {
  return (
    <label className={cn(tagVariants({ variant }), className)} {...props}>
      <div className="w-full h-full px-3 py-1 rounded-xl">
        <Typography type="section1">{children}</Typography>
      </div>
    </label>
  );
};
