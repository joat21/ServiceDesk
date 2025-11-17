import type { FC } from 'react';
import { Textarea as HeroTextarea, type TextAreaProps } from '@heroui/react';
import { mergeSlotClasses } from '../lib/classNames';

const variantClassMap: Partial<
  Record<
    NonNullable<TextAreaProps['variant']>,
    NonNullable<TextAreaProps['classNames']>
  >
> = {
  flat: {
    label: 'text-xl font-medium',
    inputWrapper:
      'border border-[#c3c0c0] bg-[#f8f8f8] data-[hover=true]:bg-[#ededed]',
  },
  bordered: {
    inputWrapper: 'border border-[#bfbfbf] bg-transparent',
  },
};

export const Textarea: FC<TextAreaProps> = ({
  classNames,
  variant = 'flat',
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
    <HeroTextarea variant={variant} classNames={mergedClassNames} {...props} />
  );
};
