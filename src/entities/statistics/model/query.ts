import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import type { PerformerStatistics } from './types';
import { getPerformerStatistics } from '../api/statistics.api';

export const usePerformerStatistics = (
  performerId?: string | number,
  options?: Partial<UseQueryOptions<PerformerStatistics>>
) =>
  useQuery<PerformerStatistics>({
    queryKey: ['performer-statistics', performerId],
    queryFn: () => getPerformerStatistics(performerId!),
    enabled: !!performerId && (options?.enabled ?? true),
    ...options,
  });
