import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

const typographyVariants = cva('whitespace-pre-line text-wrap', {
  variants: {
    type: {
      title1: 'text-[30px] font-semibold leading-[155%]',
      heading1: 'text-[24px] font-bold leading-[145%]',
      heading2: 'text-[22px] font-semibold leading-[145%]',
      heading3: 'text-[18px] font-semibold leading-[155%]',
      heading4: 'text-[16px] font-semibold leading-[155%]',
      body1: 'text-[18px] font-medium leading-[155%]',
      body2: 'text-[16px] font-medium leading-[155%]',
      section1: 'text-[14px] font-semibold leading-[155%]',
    },
  },
  defaultVariants: {
    type: 'body2',
  },
});

interface TypographyProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {}

export const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, type, ...props }, ref) => {
    return <p className={typographyVariants({ type, className })} ref={ref} {...props} />;
  },
);
Typography.displayName = 'Typography';
