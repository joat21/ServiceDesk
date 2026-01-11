import { api } from '@/shared/api/base';

export const editPriorities = (
  payload: { priorityId: number; sla: number }[]
) =>
  api.patch(
    'https://socially-advantaged-moth.cloudpub.ru/catalog/priorityUpdate',
    payload
  );
