import type { Category } from '../model/types';
import { api } from '@/shared/api/base';

export type ResponseWithPagination<T> = {
  content: T[];
  pagination: {
    pageIndex: number;
    totalPages: number;
    totalRecords: number;
  };
};

export const getCategories = () =>
  api
    .get<
      ResponseWithPagination<Category>
    >('https://socially-advantaged-moth.cloudpub.ru/catalog/categories?page=1')
    .then((r) => r.data);
