import type { FC } from 'react';
import {
  SelectItem,
  type DateValue,
  type SharedSelection,
} from '@heroui/react';
import { getLocalTimeZone, parseDate, today } from '@internationalized/date';
import type { TicketFormState } from '@/features/create-ticket';
import type { Category } from '@/entities/category';
import type { Priority } from '@/entities/priority';
import { DatePicker, Select } from '@/shared/ui';

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
          isRequired
          items={categories ?? []}
          selectedKeys={[formState.categoryId]}
          onSelectionChange={handleCategoryChange}
        >
          {(category) => (
            <SelectItem key={category.id}>{category.name}</SelectItem>
          )}
        </Select>

        <div className="flex gap-3">
          <Select
            name="priority"
            label="Приоритет"
            placeholder="Выберите приоритет"
            isRequired
            items={priorities ?? []}
            selectedKeys={[formState.priorityId]}
            onChange={handlePriorityChange}
          >
            {(priority) => (
              <SelectItem key={priority.priorityId}>{priority.name}</SelectItem>
            )}
          </Select>
          <DatePicker
            name="date"
            label="Дата переезда"
            value={relocationDateValue}
            onChange={handleDateChange}
            isDateUnavailable={(date) => {
              const now = today(getLocalTimeZone());
              return date < now;
            }}
            isRequired
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
        isRequired
        items={categories ?? []}
        selectedKeys={[formState.categoryId]}
        onSelectionChange={handleCategoryChange}
      >
        {(category) => (
          <SelectItem key={category.id}>{category.name}</SelectItem>
        )}
      </Select>

      <Select
        name="priority"
        label="Приоритет"
        placeholder="Выберите приоритет"
        isRequired
        items={priorities ?? []}
        selectedKeys={[formState.priorityId]}
        onChange={handlePriorityChange}
      >
        {(priority) => (
          <SelectItem key={priority.priorityId}>{priority.name}</SelectItem>
        )}
      </Select>
    </div>
  );
};
