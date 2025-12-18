import type { FC } from 'react';
import { Form, ModalBody } from '@heroui/react';
import { useEditOffice } from '../model/useEditOffice';
import type { Office } from '@/entities/office';
import { Button, Input, Modal, type ModalProps } from '@/shared/ui';
import { splitAddress } from '@/shared/lib/splitAddress';

interface EditOfficeModalProps extends Omit<ModalProps, 'children'> {
  office: Office | null;
}

export const EditOfficeModal: FC<EditOfficeModalProps> = ({
  office,
  onClose,
  ...props
}) => {
  const editOffice = useEditOffice();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    editOffice.mutate(
      {
        officeId: office?.id ?? '',
        city: formData.get('city')?.toString() ?? '',
        address: formData.get('address')?.toString() ?? '',
      },
      {
        onSuccess: () => {
          alert('Изменения сохранены');
          onClose?.();
        },
        onError: () => alert('Произошла ошибка'),
      }
    );
  };

  return (
    <Modal
      title="Редактирование офиса"
      action={
        <Button form="edit-office" type="submit">
          Сохранить
        </Button>
      }
      {...props}
    >
      <ModalBody>
        <Form id="edit-office" onSubmit={handleSubmit}>
          <Input
            name="city"
            label="Город"
            placeholder="Введите название города"
            // временно делаю сплит строки руками
            defaultValue={splitAddress(office?.fullAddress)?.city}
            isRequired
          />
          <Input
            name="address"
            label="Адрес"
            placeholder="Введите адрес"
            // временно делаю сплит строки руками
            defaultValue={splitAddress(office?.fullAddress)?.address}
            isRequired
          />
        </Form>
      </ModalBody>
    </Modal>
  );
};
