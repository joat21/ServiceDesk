import { api } from '@/shared/api/base';

export const editCategory = (payload: {
  categoryId: number;
  name: string;
  sla: number;
  description: string;
}) =>
  api.patch(
    'https://socially-advantaged-moth.cloudpub.ru/catalog/categoryUpdate',
    payload
  );
