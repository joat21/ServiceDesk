import {
  mergeClasses,
  type AutocompleteProps,
  Autocomplete as HeroAutocomplete,
} from '@heroui/react';

export const Autocomplete = <T extends object>({
  classNames,
  items,
  children,
  inputProps,
  ...props
}: AutocompleteProps<T>) => {
  const mergedClassNames = mergeClasses(
    {
      popoverContent: 'rounded-lg',
    },
    classNames
  );

  const mergedInputPropsClassNames = mergeClasses(
    {
      label: 'text-xl font-medium',
      inputWrapper:
        'border border-[#c3c0c0] rounded-lg min-h-8 h-8 text-base text-[#666] bg-[#f8f8f8] data-[hover=true]:bg-[#ededed]',
    },
    inputProps?.classNames
  );

  return (
    <HeroAutocomplete
      variant="flat"
      labelPlacement="outside"
      classNames={mergedClassNames}
      defaultItems={items}
      inputProps={{
        classNames: mergedInputPropsClassNames,
      }}
      {...props}
    >
      {children}
    </HeroAutocomplete>
  );
};
