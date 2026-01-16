import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTicketComment } from '../api/create-ticket-comment.api';

export const useCreateTicketComment = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (data: { ticketId: string; message: string }) =>
      createTicketComment(data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['ticket-history'] }),
  });
};
