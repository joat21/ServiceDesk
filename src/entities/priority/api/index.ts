import type { Priority } from '../model/types';
import { api } from '@/shared/api/base';

export const getPriorities = () =>
  api.get<Priority[]>('/priorities').then((r) => r.data);
