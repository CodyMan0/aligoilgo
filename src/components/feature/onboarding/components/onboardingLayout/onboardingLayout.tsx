import type { ReactNode } from 'react';

import { Typography } from '@/components/common/typography/Typography';

export interface OnboardingLayoutProps {
  title: string | ReactNode;
  content?: string | ReactNode;
}

export const OnboardingLayout = ({ title, content }: OnboardingLayoutProps) => {
  return (
    <section className="relative w-full h-full flex justify-center">
      <div className="w-[90%]">
        <Typography type="heading1" className="text-blue-50 mr-auto">
          {title}
        </Typography>
        {content}
      </div>
    </section>
  );
};
