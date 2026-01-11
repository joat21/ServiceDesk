import type { FC } from 'react';
import { ModalBody } from '@heroui/react';
import type { Category } from '@/entities/category';
import { Input, Modal, NumberInput, type ModalProps } from '@/shared/ui';

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
        <NumberInput label="SLA (часы)" defaultValue={category.sla} />
      </ModalBody>
    </Modal>
  );
};
