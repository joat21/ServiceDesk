import type { Category } from '../model/types';
import { api } from '@/shared/api/base';
import type { ResponseWithPagination } from '@/shared/types';

export const getCategories = () =>
  api
    .get<
      ResponseWithPagination<Category>
    >('https://socially-advantaged-moth.cloudpub.ru/catalog/categories?page=1')
    .then((r) => r.data);
