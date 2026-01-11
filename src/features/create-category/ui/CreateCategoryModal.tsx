import type { FC } from 'react';
import { ModalBody } from '@heroui/react';
import { Input, Modal, NumberInput, type ModalProps } from '@/shared/ui';

export const CreateCategoryModal: FC<Omit<ModalProps, 'children'>> = ({
  ...props
}) => {
  return (
    <Modal title="Создание категории" {...props}>
      <ModalBody>
        <Input label="Название категории" placeholder="Введите название" />
        <NumberInput label="SLA (часы)" />
      </ModalBody>
    </Modal>
  );
};
