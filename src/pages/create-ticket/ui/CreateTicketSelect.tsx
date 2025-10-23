import { Select, SelectItem, type SelectProps } from '@heroui/react';

interface CreateTicketSelectProps<T extends object>
  extends Omit<SelectProps<T>, 'children'> {
  options: T[];
  getKey?: (item: T) => string | number;
  getLabel?: (item: T) => string;
}

export const CreateTicketSelect = <T extends Record<string, string | number>>({
  options,
  getKey,
  getLabel,
  ...props
}: CreateTicketSelectProps<T>) => {
  const resolveKey = getKey ?? ((item: T) => item.id ?? item.value);
  const resolveLabel = getLabel ?? ((item: T) => item.label ?? item.name);

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
      {(option) => (
        <SelectItem key={resolveKey(option)}>{resolveLabel(option)}</SelectItem>
      )}
    </Select>
  );
};
