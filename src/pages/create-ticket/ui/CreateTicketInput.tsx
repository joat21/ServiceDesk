import type { FC } from 'react';
import { type InputProps } from '@heroui/react';
import { Input } from '@/shared/ui';

export const CreateTicketInput: FC<InputProps> = (props) => {
  return (
    <Input labelPlacement="outside" variant="faded" isRequired {...props} />
  );
};
