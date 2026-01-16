import { Form } from '@heroui/react';
import { Button, Card, Textarea } from '@/shared/ui';
import { SendIcon } from '@/shared/ui/icons';
import { useCreateTicketComment } from '../model/useCreateTicketComment';

export const CreateTicketComment = ({ ticketId }: { ticketId: string }) => {
  const createTicketComment = useCreateTicketComment();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    createTicketComment.mutate(
      {
        ticketId,
        message: formData.get('comment')?.toString() ?? '',
      },
      { onSuccess: () => formData.set('comment', '') }
    );
  };

  return (
    <Card className="p-4">
      <span className="mb-5 text-xl font-medium">Добавить комментарий</span>
      <Form onSubmit={handleSubmit}>
        <Textarea
          name="comment"
          className="mb-4"
          placeholder="Введите комментарий..."
          isRequired
        />
        <Button
          className="self-end text-foreground"
          type="submit"
          variant="ghost"
          startContent={<SendIcon />}
          isDisabled={createTicketComment.isPending}
        >
          Отправить
        </Button>
      </Form>
    </Card>
  );
};
