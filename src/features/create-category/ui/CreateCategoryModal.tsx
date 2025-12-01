import type { FC } from 'react';
import { ModalBody, NumberInput } from '@heroui/react';
import { Input, Modal, type ModalProps } from '@/shared/ui';

export const CreateCategoryModal: FC<Omit<ModalProps, 'children'>> = ({
  ...props
}) => {
  return (
    <Modal title="Создание категории" {...props}>
      <ModalBody>
        <Input label="Название категории" placeholder="Введите название" />
        <NumberInput label="SLA (часы)" labelPlacement="outside" />
      </ModalBody>
    </Modal>
  );
};
