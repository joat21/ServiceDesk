import type { FC } from 'react';
import {
  DatePicker as HeroDatePicker,
  mergeClasses,
  type DatePickerProps,
} from '@heroui/react';
import { I18nProvider } from '@react-aria/i18n';

export const DatePicker: FC<DatePickerProps> = ({ classNames, ...props }) => {
  const mergedClassNames = mergeClasses(
    {
      label: 'text-xl font-medium',
      inputWrapper: 'border-1 border-[#c3c0c0] rounded-lg bg-[#f8f8f8]',
      popoverContent: 'rounded-lg',
    },
    classNames
  );

  return (
    <I18nProvider locale="ru-RU">
      <HeroDatePicker
        labelPlacement="outside"
        variant="flat"
        classNames={mergedClassNames}
        selectorButtonPlacement="start"
        {...props}
      />
    </I18nProvider>
  );
};
