import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import type { Category } from './types';
import { getCategories } from '../api/category.api';
import type { ResponseWithPagination } from '@/shared/types';

export const useCategories = (
  options?: Partial<UseQueryOptions<ResponseWithPagination<Category>>>
) =>
  useQuery<ResponseWithPagination<Category>>({
    queryKey: ['categories'],
    queryFn: getCategories,
    ...options,
  });
