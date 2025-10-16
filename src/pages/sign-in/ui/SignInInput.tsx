import type { FC } from 'react';
import { Input, type InputProps } from '@heroui/react';

export const SignInInput: FC<InputProps> = (props) => {
  return (
    <Input
      isRequired
      labelPlacement="outside"
      variant="bordered"
      classNames={{
        inputWrapper: 'border-[#bfbfbf]',
        input: 'placeholder:text-[#666]',
      }}
      {...props}
    />
  );
};
