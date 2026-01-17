import { api } from '@/shared/api/base';

export const leaveFeedback = (data: {
  ticketId: string;
  rating: number;
  message: string;
}) =>
  api.post(
    `https://socially-advantaged-moth.cloudpub.ru/ticket/${data.ticketId}/review`,
    data
  );
