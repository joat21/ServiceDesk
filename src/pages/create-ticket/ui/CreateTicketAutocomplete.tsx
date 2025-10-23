import type { FC } from 'react';
import {
  Autocomplete,
  AutocompleteItem,
  type AutocompleteProps,
} from '@heroui/react';

type Option = {
  // id временно number
  id: number;
  label: string;
};

interface CreateTicketAutocompleteProps
  extends Omit<AutocompleteProps<Option>, 'children'> {
  options: Option[];
}

export const CreateTicketAutocomplete: FC<CreateTicketAutocompleteProps> = ({
  options,
  ...props
}) => {
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
        <AutocompleteItem key={option.id}>{option.label}</AutocompleteItem>
      )}
    </Autocomplete>
  );
};
