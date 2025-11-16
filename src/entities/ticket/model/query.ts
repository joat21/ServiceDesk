import { useQuery } from '@tanstack/react-query';
import { getTicketHistory } from '../api/ticket.api';

export const useTicketHistory = (id: string | number) =>
  useQuery({
    queryKey: ['ticket-history', id],
    queryFn: () => getTicketHistory(id),
  });
