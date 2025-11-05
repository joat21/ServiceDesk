import type { FC } from 'react';
import { CreateTicketTextarea } from './CreateTicketTextarea';
import { CreateTicketAutocomplete } from './CreateTicketAutocomplete';
import { CreateTicketSelect } from './CreateTicketSelect';
import { CreateTicketInput } from './CreateTicketInput';
import type { Category } from '@/entities/category';
import type { Priority } from '@/entities/priority';
import type { Office } from '@/entities/office';
import { DatePicker } from '@heroui/react';

interface RelocationFormProps {
  categories: Category[] | undefined;
  priorities: Priority[] | undefined;
  offices: Office[] | undefined;
  selectedCategoryId: string;
  onCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const RelocationForm: FC<RelocationFormProps> = ({
  categories,
  priorities,
  offices,
  selectedCategoryId,
  onCategoryChange,
}) => {
  return (
    <>
      <CreateTicketInput
        name="topic"
        label="Тема заявки"
        labelPlacement="outside"
        placeholder="Кратко опишите суть проблемы"
        isRequired
      />

      <CreateTicketTextarea
        name="description"
        label="Подробное описание"
        labelPlacement="outside"
        placeholder="Детально опишите проблему или запрос"
        isRequired
      />

      <CreateTicketInput
        name="photo"
        label="Добавить фото"
        labelPlacement="outside"
        type="file"
        isRequired={false}
      />

      <CreateTicketSelect
        name="category"
        label="Категория"
        placeholder="Выберите категорию"
        options={categories ?? []}
        selectedKeys={[selectedCategoryId]}
        onChange={onCategoryChange}
      />

      <div className="flex gap-3">
        <CreateTicketSelect
          name="priority"
          label="Приоритет"
          placeholder="Выберите приоритет"
          options={priorities ?? []}
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
        />
      </div>

      <div className="flex gap-3">
        <CreateTicketAutocomplete
          name="office"
          label="Текущий офис"
          placeholder="Выберите офис"
          options={offices ?? []}
          getLabel={(o) => o.fullAddress}
        />
        <CreateTicketAutocomplete
          name="office"
          label="Новый офис"
          placeholder="Выберите офис"
          options={offices ?? []}
          getLabel={(o) => o.fullAddress}
        />
      </div>

      <CreateTicketTextarea
        name="additionalLocation"
        label="Дополнительная локация"
        labelPlacement="outside"
        placeholder="Этаж, кабинет, уточнения"
        isRequired
      />
    </>
  );
};
