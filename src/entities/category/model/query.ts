import { useQuery } from '@tanstack/react-query';
import type { Category } from './types';
import { getCategories } from '../api/category.api';

export const useCategories = () =>
  useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: getCategories,
  });
