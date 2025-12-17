import { useQuery } from '@tanstack/react-query';
import type { PerformerStatistics } from './types';
import { getPerformerStatistics } from '../api/statistics.api';

export const usePerformerStatistics = (performerId: string | number) =>
  // возвращаеся массив - особенность моков
  // TODO: удалить потом
  useQuery<PerformerStatistics[]>({
    queryKey: ['performer-statistics', performerId],
    queryFn: () => getPerformerStatistics(performerId),
  });
