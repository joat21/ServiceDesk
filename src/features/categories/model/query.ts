import { useQuery } from '@tanstack/react-query';
import { getCategories, type Category } from '@/entities/category';

const categoriesKey = ['categories'];

export const useCategories = () =>
  useQuery<Category[]>({
    queryKey: categoriesKey,
    queryFn: getCategories,
  });
