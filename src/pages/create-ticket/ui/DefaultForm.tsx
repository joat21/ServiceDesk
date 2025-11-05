import type { FC } from 'react';
import { CreateTicketInput } from './CreateTicketInput';
import { CreateTicketTextarea } from './CreateTicketTextarea';
import { CreateTicketSelect } from './CreateTicketSelect';
import { CreateTicketAutocomplete } from './CreateTicketAutocomplete';
import type { Category } from '@/entities/category';
import type { Priority } from '@/entities/priority';
import type { Office } from '@/entities/office';

interface DefaultFormProps {
  categories: Category[] | undefined;
  priorities: Priority[] | undefined;
  offices: Office[] | undefined;
  selectedCategoryId: string;
  onCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const DefaultForm: FC<DefaultFormProps> = ({
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

      <div className="flex gap-3">
        <CreateTicketSelect
          name="category"
          label="Категория"
          placeholder="Выберите категорию"
          options={categories ?? []}
          selectedKeys={[selectedCategoryId]}
          onChange={onCategoryChange}
        />
        <CreateTicketSelect
          name="priority"
          label="Приоритет"
          placeholder="Выберите приоритет"
          options={priorities ?? []}
        />
      </div>

      <CreateTicketAutocomplete
        name="office"
        label="Офис"
        placeholder="Выберите офис"
        options={offices ?? []}
        getLabel={(o) => o.fullAddress}
      />

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
