import type { FC } from 'react';
import { addToast, Form, ModalBody } from '@heroui/react';
import type { Category } from '@/entities/category';
import {
  Button,
  Input,
  Modal,
  NumberInput,
  type ModalProps,
} from '@/shared/ui';
import { useEditCategory } from '../model/useEditCategory';

interface EditCategoryModalProps extends Omit<ModalProps, 'children'> {
  category: Category;
}

export const EditCategoryModal: FC<EditCategoryModalProps> = ({
  category,
  onClose,
  ...props
}) => {
  const { mutate, isPending } = useEditCategory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    mutate(
      {
        categoryId: category.id,
        name: String(formData.get('name')),
        sla: Number(formData.get('sla')),
        description: category.description,
      },
      {
        onSuccess: () => {
          addToast({ title: 'Изменения сохранены', severity: 'success' });
          onClose?.();
        },
        onError: () =>
          addToast({ title: 'Произошла ошибка', severity: 'danger' }),
      }
    );
  };

  return (
    <Modal
      title="Редактирование категории"
      action={
        <Button form="edit-category" type="submit" isDisabled={isPending}>
          Сохранить
        </Button>
      }
      onClose={onClose}
      {...props}
    >
      <ModalBody>
        <Form id="edit-category" onSubmit={handleSubmit} className="gap-8 pt-3">
          <Input
            name="name"
            label="Название категории"
            placeholder="Введите название"
            defaultValue={category.name}
          />
          <NumberInput
            name="sla"
            label="SLA (часы)"
            minValue={1}
            defaultValue={category.sla}
          />
        </Form>
      </ModalBody>
    </Modal>
  );
};
