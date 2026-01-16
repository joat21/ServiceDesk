import type { FC } from 'react';
import { Form, ModalBody } from '@heroui/react';
import { useEditPriorities } from '../model/useEditPriorities';
import { PRIORITY_LABELS, type Priority } from '@/entities/priority';
import { Button, Modal, NumberInput, type ModalProps } from '@/shared/ui';

interface EditPrioritiesModalProps extends Omit<ModalProps, 'children'> {
  priorities: Priority[];
}

export const EditPrioritiesModal: FC<EditPrioritiesModalProps> = ({
  priorities,
  onClose,
  ...props
}) => {
  const editPriorities = useEditPriorities();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const payload = priorities.map((p) => ({
      priorityId: p.priorityId,
      sla: Number(formData.get(p.priorityId.toString())),
    }));

    console.log(payload);

    editPriorities.mutate(payload, {
      onSuccess: () => {
        alert('Изменения сохранены');
        onClose?.();
      },
      onError: () => alert('Произошла ошибка'),
    });
  };

  return (
    <Modal
      title="Редактирование коэффициентов"
      action={
        <Button
          form="priority-factors"
          type="submit"
          isDisabled={editPriorities.isPending}
        >
          Сохранить
        </Button>
      }
      {...props}
    >
      <ModalBody>
        <Form id="priority-factors" onSubmit={handleSubmit} className="gap-8">
          {priorities.map((priority) => (
            <NumberInput
              name={priority.priorityId.toString()}
              label={PRIORITY_LABELS[priority.name]}
              placeholder="Введите коэффициент"
              minValue={0}
              maxValue={1}
              step={0.01}
              defaultValue={priority.sla}
            />
          ))}
        </Form>
      </ModalBody>
    </Modal>
  );
};
