import { api } from '@/shared/api/base';

export const createTicketComment = (data: {
  ticketId: string | number;
  comment: string;
}) => api.post('/create-ticket-comment', data).then((r) => r.data);
