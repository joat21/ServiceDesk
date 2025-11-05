import type { Ticket } from '../model/types';
import { api } from '@/shared/api/base';

export const getTickets = () =>
  api.get<Ticket[]>('/tickets').then((r) => r.data);
