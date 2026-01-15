import { useQuery } from '@tanstack/react-query';
import type { Ticket, TicketsFilter } from './types';
import { getTicket, getTicketHistory, getTickets } from '../api/ticket.api';
import type { ResponseWithPagination } from '@/shared/types';

const tickets_key = ['tickets'];

export const useTickets = (filters?: TicketsFilter) =>
  useQuery<ResponseWithPagination<Ticket>>({
    queryKey: [
      ...tickets_key,
      filters?.search,
      filters?.statusId,
      filters?.priorityId,
      filters?.dueAt,
    ],
    queryFn: () => getTickets(filters),
  });

export const useTicket = (id: string) =>
  useQuery({ queryKey: [...tickets_key, id], queryFn: () => getTicket(id) });

export const useTicketHistory = (id: string) =>
  useQuery({
    queryKey: ['ticket-history', id],
    queryFn: () => getTicketHistory(id),
  });
