import type { Performer } from '../model/types';
import { api } from '@/shared/api/base';
import type { ResponseWithPagination } from '@/shared/types';

export interface GetPerformersArgs {
  categories: string;
}

export const getPerformers = async (args?: GetPerformersArgs) => {
  const params = new URLSearchParams();

  if (args?.categories) params.append('categories', args.categories);

  const { data } = await api.get<ResponseWithPagination<Performer>>(
    'https://socially-advantaged-moth.cloudpub.ru/user/getPerformers?page=1',
    { params }
  );

  return data;
};
