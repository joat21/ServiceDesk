import type { Category } from '../model/types';
import { api } from '@/shared/api/base';

export const getCategories = () =>
  api.get<Category[]>('/categories').then((r) => r.data);
