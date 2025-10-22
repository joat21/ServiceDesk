import type { FC } from 'react';
import { Textarea, type TextAreaProps } from '@heroui/react';

export const CreateTicketTextarea: FC<TextAreaProps> = (props) => {
  return (
    <Textarea
      isRequired
      labelPlacement="outside"
      variant="bordered"
      classNames={{
        label: 'text-xl font-medium',
        inputWrapper: 'rounded-2xl border-1 border-[#bfbfbf] bg-[#EDEDED]',
        input: 'placeholder:text-[#666]',
      }}
      {...props}
    />
  );
};
