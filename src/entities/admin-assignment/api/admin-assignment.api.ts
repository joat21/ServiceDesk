import type { AdminAssignment } from '../model/types';
import { api } from '@/shared/api/base';

export const getAdminAssignments = () =>
  api.get<AdminAssignment[]>('/admin-assignments').then((r) => r.data);
