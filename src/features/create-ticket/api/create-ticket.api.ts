import type { TicketFormState } from '../model/types';
import { api } from '@/shared/api/base';

export const createTicket = (ticket: TicketFormState) =>
  api.post(
    'https://socially-advantaged-moth.cloudpub.ru/ticket/creation',
    ticket
  );
