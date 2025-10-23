import { Select, SelectItem, type SelectProps } from '@heroui/react';

type OptionKey = string | number;
type OptionLabel = string;
type OptionLike = {
  id?: OptionKey;
  value?: OptionKey;
  label?: OptionLabel;
  name?: OptionLabel;
};

interface CreateTicketSelectProps<T extends OptionLike>
  extends Omit<SelectProps<T>, 'children'> {
  options: T[];
  getKey?: (item: T) => OptionKey;
  getLabel?: (item: T) => OptionLabel;
}

export const CreateTicketSelect = <T extends OptionLike>({
  options,
  getKey,
  getLabel,
  ...props
}: CreateTicketSelectProps<T>) => {
  const resolveKey = (item: T) => {
    if (getKey) return getKey(item);
    return item.id ?? item.value ?? '';
  };

  const resolveLabel = (item: T) => {
    if (getLabel) return getLabel(item);
    return item.label ?? item.name ?? '';
  };

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
