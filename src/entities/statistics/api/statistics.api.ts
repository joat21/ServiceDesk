import { api } from '@/shared/api/base';
import type { PerformerStatistics } from '../model/types';

export const getPerformerStatistics = () =>
  api
    .get<PerformerStatistics>(
      `https://socially-advantaged-moth.cloudpub.ru/ticket/aggregatePanel`
    )
    .then((r) => r.data);
