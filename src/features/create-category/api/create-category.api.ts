import { api } from '@/shared/api/base';

export const createCategory = (payload: {
  name: string;
  sla: number;
  description: string;
}) =>
  api.post(
    'https://socially-advantaged-moth.cloudpub.ru/catalog/categoryCreate',
    payload
  );
