import type { TicketFormState } from '../model/types';
import { api } from '@/shared/api/base';

export const createTicket = (ticket: TicketFormState) =>
  api.post('/tickets', ticket);
