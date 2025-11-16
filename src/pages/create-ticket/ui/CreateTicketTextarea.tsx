import type { FC } from 'react';
import type { TextAreaProps } from '@heroui/react';
import { Textarea } from '@/shared/ui';

export const CreateTicketTextarea: FC<TextAreaProps> = (props) => {
  return (
    <Textarea labelPlacement="outside" variant="faded" isRequired {...props} />
  );
};
