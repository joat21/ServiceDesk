import type { FC } from 'react';
import { Input, type InputProps } from '@heroui/react';

export const CreateTicketInput: FC<InputProps> = (props) => {
  return (
    <Input
      isRequired
      labelPlacement="outside"
      variant="bordered"
      classNames={{
        label: 'text-xl font-medium',
        inputWrapper: 'rounded-full border-1 border-[#bfbfbf] bg-[#EDEDED]',
        input: 'placeholder:text-[#666]',
      }}
      {...props}
    />
  );
};
