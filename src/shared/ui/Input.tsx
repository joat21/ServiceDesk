import type { FC } from 'react';
import { Input as HeroInput, type InputProps } from '@heroui/react';
import { mergeSlotClasses } from '../lib/classNames';

const variantClassMap: Partial<
  Record<
    NonNullable<InputProps['variant']>,
    NonNullable<InputProps['classNames']>
  >
> = {
  faded: {
    label: 'text-xl font-medium',
    inputWrapper: 'border border-[#c3c0c0] bg-[#f8f8f8]',
  },
  bordered: {
    inputWrapper: 'border border-[#bfbfbf] bg-transparent',
  },
};

export const Input: FC<InputProps> = ({
  classNames,
  variant = 'faded',
  ...props
}) => {
  const mergedClassNames = mergeSlotClasses(
    {
      base: 'text-black',
      inputWrapper: 'px-2.5 py-1 rounded-lg',
      input: 'text-base placeholder:text-[#666]',
    },
    variantClassMap[variant],
    classNames
  );

  return (
    <HeroInput variant={variant} classNames={mergedClassNames} {...props} />
  );
};
