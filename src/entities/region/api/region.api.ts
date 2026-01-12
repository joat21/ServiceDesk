import { api } from '@/shared/api/base';
import type { Region } from '../model/types';

export const getRegions = () =>
  api
    .get<Region[]>('https://socially-advantaged-moth.cloudpub.ru/user/regions')
    .then((r) => r.data);
