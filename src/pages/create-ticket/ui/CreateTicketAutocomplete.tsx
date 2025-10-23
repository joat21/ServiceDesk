import {
  Autocomplete,
  AutocompleteItem,
  type AutocompleteProps,
} from '@heroui/react';

type OptionKey = string | number;
type OptionLabel = string;
type OptionLike = {
  id?: OptionKey;
  value?: OptionKey;
  label?: OptionLabel;
  name?: OptionLabel;
};

interface CreateTicketAutocompleteProps<T extends OptionLike>
  extends Omit<AutocompleteProps<T>, 'children'> {
  options: T[];
  getKey?: (item: T) => OptionKey;
  getLabel?: (item: T) => OptionLabel;
}

export const CreateTicketAutocomplete = <T extends OptionLike>({
  options,
  getKey,
  getLabel,
  ...props
}: CreateTicketAutocompleteProps<T>) => {
  const resolveKey = (item: T) => {
    if (getKey) return getKey(item);

    return item.id ?? item.value ?? '';
  };

  const resolveLabel = (item: T) => {
    if (getLabel) return getLabel(item);

    return item.label ?? item.name ?? '';
  };

  return (
    <Autocomplete
      labelPlacement="outside"
      variant="bordered"
      radius="full"
      isRequired
      items={options}
      inputProps={{
        classNames: {
          label: 'text-xl font-medium',
          inputWrapper: 'border-1 border-[#bfbfbf] bg-[#EDEDED]',
        },
      }}
      {...props}
    >
      {(option) => (
        <AutocompleteItem key={resolveKey(option)}>
          {resolveLabel(option)}
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
};
