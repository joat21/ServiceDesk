import type { FC } from 'react';
import { addToast, Form, ModalBody, type ModalProps } from '@heroui/react';
import { useLeaveFeedback } from '../model/query';
import { Button, Modal, NumberInput, Textarea } from '@/shared/ui';

interface LeaveFeedbackModalProps extends Omit<ModalProps, 'children'> {
  ticketId: string;
}

export const LeaveFeedbackModal: FC<LeaveFeedbackModalProps> = ({
  ticketId,
  onClose,
  ...props
}) => {
  const leaveFeedback = useLeaveFeedback();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    leaveFeedback.mutate(
      {
        ticketId,
        rating: Number(formData.get('rating')),
        message: formData.get('comment')?.toString() ?? '',
      },
      {
        onSuccess: () => {
          addToast({
            title: 'Спасибо за отзыв!',
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
      title="Оставить отзыв о выполнении"
      action={
        <Button
          form="leave-feedback"
          type="submit"
          isDisabled={leaveFeedback.isPending}
        >
          Отправить
        </Button>
      }
      className="max-w-[680px]"
      onClose={onClose}
      {...props}
    >
      <ModalBody>
        <Form id="leave-feedback" onSubmit={handleSubmit} className="gap-7">
          <NumberInput
            name="rating"
            label="Оцените качество выполнения работы"
            minValue={1}
            maxValue={5}
            placeholder="от 1 до 5"
            isRequired
          />
          <Textarea
            name="comment"
            label="Ваш отзыв"
            labelPlacement="outside"
            placeholder="Опишите, что понравилось или что можно улучшить"
            isRequired
          />
        </Form>
      </ModalBody>
    </Modal>
  );
};
