import { useQuery } from '@tanstack/react-query';
import type { Ticket, TicketsFilter } from './types';
import { getTicket, getTicketHistory, getTickets } from '../api/ticket.api';

const tickets_key = ['tickets'];

export const useTickets = (filters?: TicketsFilter) =>
  useQuery<Ticket[]>({
    queryKey: [...tickets_key, filters],
    queryFn: () => getTickets(filters),
  });

// id временно number
export const useTicket = (id: number) =>
  useQuery({ queryKey: [...tickets_key, id], queryFn: () => getTicket(id) });

export const useTicketHistory = (id: string | number) =>
  useQuery({
    queryKey: ['ticket-history', id],
    queryFn: () => getTicketHistory(id),
  });
