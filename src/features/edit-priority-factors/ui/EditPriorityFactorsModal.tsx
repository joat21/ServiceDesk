import type { FC } from 'react';
import { ModalBody, NumberInput } from '@heroui/react';
import { usePriorities } from '@/entities/priority';
import { Modal, type ModalProps } from '@/shared/ui';

export const EditPriorityFactorsModal: FC<Omit<ModalProps, 'children'>> = ({
  ...props
}) => {
  const { data: priorities, isLoading } = usePriorities();

  if (isLoading) return 'Загрузка...';
  if (!priorities) return <p>Приоритеты не найдены</p>;

  return (
    <Modal title="Редактирование коэффициентов" {...props}>
      <ModalBody>
        {priorities.map((priority) => (
          <NumberInput
            label={priority.name}
            step={0.01}
            defaultValue={priority.slaFactor}
          />
        ))}
      </ModalBody>
    </Modal>
  );
};
