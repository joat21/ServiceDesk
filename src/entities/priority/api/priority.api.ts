import type { Priority } from '../model/types';
import { api } from '@/shared/api/base';

export const getPriorities = () =>
  api
    .get<
      Priority[]
    >('https://socially-advantaged-moth.cloudpub.ru/catalog/priorities')
    .then((r) => r.data);
