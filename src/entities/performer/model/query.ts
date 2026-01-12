import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import { getPerformers, type GetPerformersArgs } from '../api/performer.api';
import type { ResponseWithPagination } from '@/shared/types';
import type { Performer } from './types';

export const usePerformers = (
  args?: GetPerformersArgs,
  options?: Partial<UseQueryOptions<ResponseWithPagination<Performer>>>
) =>
  useQuery({
    queryKey: ['performers', args?.categories],
    queryFn: () => getPerformers(args),
    ...options,
  });
