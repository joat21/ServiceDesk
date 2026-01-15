import type { ResponseWithPagination } from '@/shared/types';
import type { Ticket, TicketHistoryItem, TicketsFilter } from '../model/types';
import { api } from '@/shared/api/base';

export const getTickets = async (filters?: TicketsFilter) => {
  const params = new URLSearchParams();

  if (filters?.search) params.append('theme', `${filters.search}`);
  if (filters?.priorityId)
    params.append('priorityId', String(filters.priorityId));
  if (filters?.statusId) params.append('statusId', String(filters.statusId));
  if (filters?.dueAt) params.append('dueAt', filters.dueAt);

  const { data } = await api.get<ResponseWithPagination<Ticket>>(
    'https://socially-advantaged-moth.cloudpub.ru/ticket/panel',
    { params }
  );
  return data;
};

export const getTicket = (id: string) =>
  api.get<Ticket>(`/tickets/${id}`).then((r) => r.data);

export const getTicketHistory = (id: string) =>
  api
    .get<TicketHistoryItem[]>(`/ticket-history?ticketId=${id}`)
    .then((r) => r.data);
