import {
  Autocomplete,
  AutocompleteItem,
  type AutocompleteProps,
} from '@heroui/react';

interface CreateTicketAutocompleteProps<T extends object>
  extends Omit<AutocompleteProps<T>, 'children'> {
  options: T[];
  getKey?: (item: T) => string | number;
  getLabel?: (item: T) => string;
}

export const CreateTicketAutocomplete = <
  T extends Record<string, string | number>,
>({
  options,
  getKey,
  getLabel,
  ...props
}: CreateTicketAutocompleteProps<T>) => {
  const resolveKey = getKey ?? ((item: T) => item.id ?? item.value);
  const resolveLabel = getLabel ?? ((item: T) => item.label ?? item.name);

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
