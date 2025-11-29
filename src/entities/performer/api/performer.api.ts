import { api } from '@/shared/api/base';
import type { Performer } from '../model/types';

export const getPerformers = () =>
  api.get<Performer[]>('/performers').then((r) => r.data);
