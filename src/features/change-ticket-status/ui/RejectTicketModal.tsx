import type { FC } from 'react';
import { Form, ModalBody, type ModalProps } from '@heroui/react';
import { Button, Modal, Textarea } from '@/shared/ui';
import { useRejectTicket } from '../model/query';

interface RejectTicketModalProps extends Omit<ModalProps, 'children'> {
  ticketId: string;
}

export const RejectTicketModal: FC<RejectTicketModalProps> = ({
  ticketId,
  onClose,
  ...props
}) => {
  const rejectTicket = useRejectTicket();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    rejectTicket.mutate({
      ticketId,
      message: formData.get('comment')?.toString() ?? '',
    });
  };

  return (
    <Modal
      title="Отклонить заявку"
      action={
        <Button
          form="reject-ticket"
          type="submit"
          isDisabled={rejectTicket.isPending}
        >
          Отклонить заявку
        </Button>
      }
      className="max-w-[680px]"
      onClose={onClose}
      {...props}
    >
      <ModalBody>
        <Form id="reject-ticket" onSubmit={handleSubmit}>
          <Textarea
            name="comment"
            label="Причина отклонения"
            labelPlacement="outside"
            placeholder="Например: Неправильная категория заявки, нужна категория Сантехника"
            isRequired
          />
        </Form>
      </ModalBody>
    </Modal>
  );
};
