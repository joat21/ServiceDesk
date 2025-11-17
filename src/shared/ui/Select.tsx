import {
  Select as HeroSelect,
  mergeClasses,
  type SelectProps,
} from '@heroui/react';

export const Select = <T extends object>({
  children,
  classNames,
  ...props
}: SelectProps<T>) => {
  const mergedClassNames = mergeClasses(
    {
      label: 'text-xl font-medium',
      trigger:
        'border border-[#c3c0c0] rounded-lg text-base bg-[#f8f8f8] data-[hover=true]:bg-[#ededed]',
      popoverContent: 'rounded-lg',
    },
    classNames
  );

  return (
    <HeroSelect
      classNames={mergedClassNames}
      variant="flat"
      labelPlacement="outside"
      {...props}
    >
      {children}
    </HeroSelect>
  );
};
