import type { AnalystAssignment } from '../model/types';
import { api } from '@/shared/api/base';

export const getAnalystAssignments = () =>
  api.get<AnalystAssignment[]>('/analysts').then((r) => r.data);
