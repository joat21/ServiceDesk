import type { FC } from 'react';
import { type InputProps } from '@heroui/react';
import { Input } from '@/shared/ui';

export const SignInInput: FC<InputProps> = (props) => {
  return (
    <Input
      isRequired
      labelPlacement="outside"
      variant="bordered"
      classNames={{
        inputWrapper: 'border-2',
        input: 'placeholder:font-light',
      }}
      {...props}
    />
  );
};
