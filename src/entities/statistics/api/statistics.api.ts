import { api } from '@/shared/api/base';
import type { PerformerStatistics } from '../model/types';

export const getPerformerStatistics = (performerId: string | number) =>
  // возвращаеся массив - особенность моков
  // TODO: удалить потом
  api
    .get<PerformerStatistics[]>(`/performer-stats?id=${performerId}`)
    .then((r) => r.data);
