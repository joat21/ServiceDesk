import {
  Select as HeroSelect,
  mergeClasses,
  SelectItem,
  type SelectProps as HeroSelectProps,
} from '@heroui/react';

type OptionKey = string | number;
type OptionLabel = string;
type OptionLike = {
  id?: OptionKey;
  value?: OptionKey;
  label?: OptionLabel;
  name?: OptionLabel;
};

export interface SelectProps<T extends OptionLike>
  extends Omit<HeroSelectProps<T>, 'children'> {
  items: T[];
  getKey?: (item: T) => OptionKey;
  getLabel?: (item: T) => OptionLabel;
}

export const Select = <T extends OptionLike>({
  items,
  getKey,
  getLabel,
  classNames,
  ...props
}: SelectProps<T>) => {
  const resolveKey = (item: T) => {
    if (getKey) return getKey(item);
    return item.id ?? item.value ?? '';
  };

  const resolveLabel = (item: T) => {
    if (getLabel) return getLabel(item);
    return item.label ?? item.name ?? '';
  };

  const mergedClassNames = mergeClasses(
    {
      label: 'text-xl font-medium',
      trigger: 'border border-[#c3c0c0] rounded-lg text-base bg-[#f8f8f8]',
      popoverContent: 'rounded-lg',
    },
    classNames
  );

  return (
    <HeroSelect
      classNames={mergedClassNames}
      variant="bordered"
      items={items}
      {...props}
    >
      {(option) => (
        <SelectItem key={resolveKey(option)}>{resolveLabel(option)}</SelectItem>
      )}
    </HeroSelect>
  );
};
