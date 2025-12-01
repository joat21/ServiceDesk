import type { FC } from 'react';
import { ModalBody, NumberInput } from '@heroui/react';
import type { Category } from '@/entities/category';
import { Input, Modal, type ModalProps } from '@/shared/ui';

interface EditCategoryModalProps extends Omit<ModalProps, 'children'> {
  category: Category;
}

export const EditCategoryModal: FC<EditCategoryModalProps> = ({
  category,
  ...props
}) => {
  return (
    <Modal title="Редактирование категории" {...props}>
      <ModalBody>
        <Input
          label="Название категории"
          placeholder="Введите название"
          defaultValue={category.name}
        />
        <NumberInput
          label="SLA (часы)"
          labelPlacement="outside"
          defaultValue={category.sla}
        />
      </ModalBody>
    </Modal>
  );
};
