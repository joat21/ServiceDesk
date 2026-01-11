import type { AdminAssignment } from '../model/types';
import { api } from '@/shared/api/base';

export const getAdminAssignments = () =>
  api
    .get<
      AdminAssignment[]
    >('https://socially-advantaged-moth.cloudpub.ru/user/regions/with-admins')
    .then((r) => r.data);
