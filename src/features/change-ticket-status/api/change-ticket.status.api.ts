import { api } from '@/shared/api/base';

export const startWork = (ticketId: string) =>
  api.patch(
    `https://socially-advantaged-moth.cloudpub.ru/ticket/${ticketId}/startWork`
  );

export const rejectTicket = (data: { ticketId: string; message: string }) =>
  api.post(
    `https://socially-advantaged-moth.cloudpub.ru/ticket/${data.ticketId}/reject`,
    data
  );

export const fullfillTicket = (data: {
  ticketId: string;
  message: string;
  total: number;
  photosUrl: string[];
}) =>
  api.post(
    `https://socially-advantaged-moth.cloudpub.ru/ticket/${data.ticketId}/complete`,
    data
  );
