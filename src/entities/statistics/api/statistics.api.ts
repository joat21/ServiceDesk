import { api } from '@/shared/api/base';
import type { PerformerStatistics } from '../model/types';

export const getPerformerStatistics = (performerId: string | number) =>
  api
    .get<PerformerStatistics>(`/performer-stats/${performerId}`)
    .then((r) => r.data);
