import type { FC } from 'react';
import {
  DatePicker,
  type DateValue,
  type SharedSelection,
} from '@heroui/react';
import { parseDate } from '@internationalized/date';
import type { TicketFormState } from '../model/types';
import type { Category } from '@/entities/category';
import type { Priority } from '@/entities/priority';
import { Select } from '@/shared/ui';

interface ClassificationSectionProps {
  categories: Category[] | undefined;
  priorities: Priority[] | undefined;
  formState: TicketFormState;
  handleFieldChange: (
    field: keyof TicketFormState,
    value?: string | null
  ) => void;
  isRelocation: boolean;
}

export const ClassificationSection: FC<ClassificationSectionProps> = ({
  categories,
  priorities,
  formState,
  handleFieldChange,
  isRelocation,
}) => {
  const handleCategoryChange = (value: SharedSelection) => {
    handleFieldChange('categoryId', value.currentKey);
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleFieldChange('priorityId', e.target.value);
  };

  const handleDateChange = (value: DateValue | null) => {
    handleFieldChange('relocationDate', value ? value.toString() : null);
  };

  const relocationDateValue: DateValue | null = formState.relocationDate
    ? parseDate(formState.relocationDate)
    : null;

  if (isRelocation) {
    return (
      <>
        <Select
          name="category"
          label="Категория"
          placeholder="Выберите категорию"
          labelPlacement="outside"
          isRequired
          items={categories ?? []}
          selectedKeys={[formState.categoryId]}
          onSelectionChange={handleCategoryChange}
        />

        <div className="flex gap-3">
          <Select
            name="priority"
            label="Приоритет"
            placeholder="Выберите приоритет"
            labelPlacement="outside"
            isRequired
            items={priorities ?? []}
            selectedKeys={[formState.priorityId]}
            onChange={handlePriorityChange}
          />

          <DatePicker
            name="date"
            label="Дата переезда"
            labelPlacement="outside"
            variant="bordered"
            radius="full"
            classNames={{
              label: 'text-xl font-medium',
              inputWrapper: 'border-1 border-[#bfbfbf] bg-[#EDEDED]',
            }}
            selectorButtonPlacement="start"
            isRequired
            value={relocationDateValue}
            onChange={handleDateChange}
          />
        </div>
      </>
    );
  }

  return (
    <div className="flex gap-3">
      <Select
        name="category"
        label="Категория"
        placeholder="Выберите категорию"
        labelPlacement="outside"
        isRequired
        items={categories ?? []}
        selectedKeys={[formState.categoryId]}
        onSelectionChange={handleCategoryChange}
      />

      <Select
        name="priority"
        label="Приоритет"
        placeholder="Выберите приоритет"
        labelPlacement="outside"
        isRequired
        items={priorities ?? []}
        selectedKeys={[formState.priorityId]}
        onChange={handlePriorityChange}
      />
    </div>
  );
};
