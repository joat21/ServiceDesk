import type { FC } from 'react';
import { Form, ModalBody } from '@heroui/react';
import { Button, Input, Modal, type ModalProps } from '@/shared/ui';
import { useCreateOffice } from '../model/useCreateOffice';

export const CreateOfficeModal: FC<Omit<ModalProps, 'children' | 'action'>> = ({
  onClose,
  ...props
}) => {
  const createOffice = useCreateOffice();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    createOffice.mutate(
      {
        city: formData.get('city')?.toString() ?? '',
        address: formData.get('address')?.toString() ?? '',
      },
      {
        onSuccess: () => {
          alert('Офис добавлен');
          onClose?.();
        },
        onError: () => alert('Произошла ошибка'),
      }
    );
  };

  return (
    <Modal
      title="Добавление офиса"
      action={
        <Button form="create-office" type="submit">
          Добавить
        </Button>
      }
      {...props}
    >
      <ModalBody>
        <Form id="create-office" onSubmit={handleSubmit}>
          <Input
            name="city"
            label="Город"
            placeholder="Введите название города"
            isRequired
          />
          <Input
            name="address"
            label="Адрес"
            placeholder="Введите адрес"
            isRequired
          />
        </Form>
      </ModalBody>
    </Modal>
  );
};
