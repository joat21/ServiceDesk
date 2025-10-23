import type { Office } from '../model/types';
import { api } from '@/shared/api/base';

export const getOffices = () =>
  api.get<Office[]>('/offices').then((r) => r.data);
