import { useQuery } from '@tanstack/react-query';
import type { PerformerStatistics } from './types';
import { getPerformerStatistics } from '../api/statistics.api';

export const usePerformerStatistics = () =>
  useQuery<PerformerStatistics>({
    queryKey: ['performer-statistics'],
    queryFn: () => getPerformerStatistics(),
  });
