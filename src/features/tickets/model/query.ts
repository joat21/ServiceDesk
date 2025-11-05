import { getTickets, type Ticket } from '@/entities/ticket';
import { useQuery } from '@tanstack/react-query';

const tickets_key = ['tickets'];

export const useTickets = () =>
  useQuery<Ticket[]>({
    queryKey: tickets_key,
    queryFn: getTickets,
  });
