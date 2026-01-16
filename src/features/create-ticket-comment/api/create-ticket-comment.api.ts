import { api } from '@/shared/api/base';

export const createTicketComment = (data: {
  ticketId: string;
  message: string;
}) =>
  api
    .post(
      `https://socially-advantaged-moth.cloudpub.ru/ticket/${data.ticketId}/comments`,
      { message: data.message }
    )
    .then((r) => r.data);
