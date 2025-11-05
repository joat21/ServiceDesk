import type { Ticket, TicketsFilter } from '../model/types';
import { api } from '@/shared/api/base';

export const getTickets = async (filters?: TicketsFilter) => {
  const params = new URLSearchParams();

  if (filters?.search) params.append('theme', `${filters.search}*`);
  if (filters?.priorityId)
    params.append('priorityId', String(filters.priorityId));
  if (filters?.statusId) params.append('statusId', String(filters.statusId));
  if (filters?.deadline) params.append('deadline', filters.deadline);

  const { data } = await api.get<Ticket[]>('/tickets', { params });
  return data;
};

// id временно number
export const getTicket = (id: number) =>
  api.get<Ticket>(`/tickets/${id}`).then((r) => r.data);
