import {
  getTicket,
  getTickets,
  type Ticket,
  type TicketsFilter,
} from '@/entities/ticket';
import { useQuery } from '@tanstack/react-query';

const tickets_key = ['tickets'];

export const useTickets = (filters?: TicketsFilter) =>
  useQuery<Ticket[]>({
    queryKey: [...tickets_key, filters],
    queryFn: () => getTickets(filters),
  });

// id временно number
export const useTicket = (id: number) =>
  useQuery({ queryKey: [...tickets_key, id], queryFn: () => getTicket(id) });
