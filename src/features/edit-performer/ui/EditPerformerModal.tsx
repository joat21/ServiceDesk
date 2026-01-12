import type { FC } from 'react';
import { ModalBody, SelectItem } from '@heroui/react';
import { useCategories } from '@/entities/category';
import { useOffices } from '@/entities/office';
import type { Performer } from '@/entities/performer';
import { Modal, PageLoader, Select, type ModalProps } from '@/shared/ui';

interface EditPerformerModalProps extends Omit<ModalProps, 'children'> {
  performer: Performer;
}

export const EditPerformerModal: FC<EditPerformerModalProps> = ({
  performer,
  ...props
}) => {
  const { data: categories, isLoading: isCategoriesLoading } = useCategories();
  const { data: offices, isLoading: isOfficesLoading } = useOffices();

  if (isCategoriesLoading || isOfficesLoading) return <PageLoader />;

  return (
    <Modal title="Редактирование исполнителя" {...props}>
      <ModalBody>
        <span>{performer.fullName}</span>
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
        <Select
          name="offices"
          label="Офисы"
          placeholder="Выберите офисы"
          items={offices}
          isRequired
          selectionMode="multiple"
        >
          {(office) => (
            <SelectItem key={office.id}>{office.fullAddress}</SelectItem>
          )}
        </Select>
      </ModalBody>
    </Modal>
  );
};
