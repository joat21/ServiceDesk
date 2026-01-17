import { api } from '@/shared/api/base';

export const assignPerformer = (data: {
  ticketId: string;
  userId: string;
  categoryId: string;
}) =>
  api.post(
    `https://socially-advantaged-moth.cloudpub.ru/ticket/${data.ticketId}/assign`,
    data
  );
