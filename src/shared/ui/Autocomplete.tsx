import {
  mergeClasses,
  type AutocompleteProps,
  Autocomplete as HeroAutocomplete,
} from '@heroui/react';

export const Autocomplete = <T extends object>({
  classNames,
  items,
  children,
  ...props
}: AutocompleteProps<T>) => {
  const mergedClassNames = mergeClasses(
    {
      popoverContent: 'rounded-lg',
    },
    classNames
  );

  return (
    <HeroAutocomplete
      variant="flat"
      labelPlacement="outside"
      classNames={mergedClassNames}
      defaultItems={items}
      inputProps={{
        classNames: {
          label: 'text-xl font-medium',
          inputWrapper:
            'border border-[#c3c0c0] rounded-lg text-base bg-[#f8f8f8]',
        },
      }}
      {...props}
    >
      {children}
    </HeroAutocomplete>
  );
};
