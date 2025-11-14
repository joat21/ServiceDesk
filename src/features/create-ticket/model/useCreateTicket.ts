import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { TicketFormState } from './types';
import { createTicket } from '../api/create-ticket.api';

export const useCreateTicket = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (ticket: TicketFormState) => createTicket(ticket),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['tickets'] }),
  });
};
