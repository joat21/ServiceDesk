import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { TicketFormState } from './types';
import { createTicket } from '../api/create-ticket.api';

// Интерфейс для моков
interface MockTicketData extends TicketFormState {
  category: string;
  priority: string;
  office: string;
  relocationOffice?: string;
  performer: string;
  createdAt: string;
  status: string;
  number: string;
  deadline: string;
}

export const useCreateTicket = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (ticket: MockTicketData) => createTicket(ticket),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['tickets'] }),
  });
};
