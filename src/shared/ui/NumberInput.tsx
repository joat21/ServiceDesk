import {
  NumberInput as HeroNumberInput,
  type NumberInputProps,
} from '@heroui/react';

export const NumberInput = (props: NumberInputProps) => {
  return (
    <HeroNumberInput
      labelPlacement="outside"
      classNames={{
        label: 'text-xl font-medium',
        inputWrapper:
          'px-2.5 py-1 border border-[#c3c0c0] bg-[#f8f8f8] data-[hover=true]:bg-[#ededed] rounded-lg min-h-8 h-8',
        input: 'text-base',
      }}
      {...props}
    />
  );
};
