import type { FC } from 'react';
import { addToast, Form, ModalBody } from '@heroui/react';
import {
  Button,
  Input,
  Modal,
  NumberInput,
  type ModalProps,
} from '@/shared/ui';
import { useCreateCategory } from '../model/useCreateCategory';

export const CreateCategoryModal: FC<Omit<ModalProps, 'children'>> = ({
  onClose,
  ...props
}) => {
  const { mutate, isPending } = useCreateCategory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    mutate(
      {
        name: String(formData.get('name')),
        sla: Number(formData.get('sla')),
        description: '',
      },
      {
        onSuccess: () => {
          addToast({
            title: 'Заявка принята к исполнению',
            severity: 'success',
          });
          onClose?.();
        },
        onError: () =>
          addToast({ title: 'Произошла ошибка', severity: 'danger' }),
      }
    );
  };

  return (
    <Modal
      title="Создание категории"
      action={
        <Button form="create-category" type="submit" isDisabled={isPending}>
          Создать
        </Button>
      }
      onClose={onClose}
      {...props}
    >
      <ModalBody>
        <Form
          id="create-category"
          onSubmit={handleSubmit}
          className="gap-8 pt-3"
        >
          <Input
            name="name"
            label="Название категории"
            placeholder="Введите название"
          />
          <NumberInput
            name="sla"
            label="SLA (часы)"
            defaultValue={1}
            minValue={1}
          />
        </Form>
      </ModalBody>
    </Modal>
  );
};
