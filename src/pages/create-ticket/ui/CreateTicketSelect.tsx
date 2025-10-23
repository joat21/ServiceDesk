import type { FC } from 'react';
import { Select, SelectItem, type SelectProps } from '@heroui/react';

type Option = {
  // id временно number
  id: number;
  label: string;
};

interface CreateTicketSelectProps
  extends Omit<SelectProps<Option>, 'children'> {
  options: Option[];
}

export const CreateTicketSelect: FC<CreateTicketSelectProps> = ({
  options,
  ...props
}) => {
  return (
    <Select
      labelPlacement="outside"
      isRequired
      variant="bordered"
      radius="full"
      classNames={{
        label: 'text-xl font-medium',
        trigger: 'border-1 border-[#bfbfbf] bg-[#EDEDED]',
      }}
      items={options}
      {...props}
    >
      {(option) => <SelectItem key={option.id}>{option.label}</SelectItem>}
    </Select>
  );
};
