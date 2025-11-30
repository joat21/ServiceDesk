import type { FC } from 'react';
import { AutocompleteItem, ModalBody, SelectItem } from '@heroui/react';
import { useCategories } from '@/entities/category';
import { useOffices } from '@/entities/office';
import { Autocomplete, Modal, Select, type ModalProps } from '@/shared/ui';

const employees = [
  { id: 1, fullName: 'Иванов И.И.' },
  { id: 2, fullName: 'Иванов И.И.' },
  { id: 3, fullName: 'Иванов И.И.' },
  { id: 4, fullName: 'Иванов И.И.' },
];

export const CreatePerformerModal: FC<Omit<ModalProps, 'children'>> = ({
  ...props
}) => {
  const { data: categories, isLoading: isCategoriesLoading } = useCategories();
  const { data: offices, isLoading: isOfficesLoading } = useOffices();

  if (isCategoriesLoading || isOfficesLoading) return 'Загрузка...';

  return (
    <Modal title="Создание исполнителя" {...props}>
      <ModalBody>
        <Autocomplete
          name="name"
          label="Сотрудник"
          placeholder="Выберите сотрудника"
          items={employees}
          isRequired
        >
          {(employee) => (
            <AutocompleteItem key={employee.id}>
              {employee.fullName}
            </AutocompleteItem>
          )}
        </Autocomplete>
        <Select
          name="categories"
          label="Категории"
          placeholder="Выберите категории"
          items={categories}
          isRequired
          selectionMode="multiple"
          classNames={{
            label: 'text-lg',
          }}
        >
          {(category) => (
            <SelectItem key={category.id}>{category.name}</SelectItem>
          )}
        </Select>
        <Autocomplete
          name="offices"
          label="Офисы"
          placeholder="Выберите офисы"
          items={offices}
        >
          {(office) => (
            <AutocompleteItem key={office.id}>
              {office.fullAddress}
            </AutocompleteItem>
          )}
        </Autocomplete>
      </ModalBody>
    </Modal>
  );
};
