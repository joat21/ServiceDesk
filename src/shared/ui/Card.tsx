import type { FC } from 'react';
import { Card as HeroCard, mergeClasses, type CardProps } from '@heroui/react';

export const Card: FC<CardProps> = ({ children, classNames, ...props }) => {
  const mergedClassNames = mergeClasses(
    {
      base: 'rounded-xl border border-[#c3c0c0]',
    },
    classNames
  );

  return (
    <HeroCard classNames={mergedClassNames} {...props}>
      {children}
    </HeroCard>
  );
};
