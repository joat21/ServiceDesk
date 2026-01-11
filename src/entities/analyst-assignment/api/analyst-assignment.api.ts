import type { AnalystAssignment } from '../model/types';
import { api } from '@/shared/api/base';

export const getAnalystAssignments = () =>
  api
    .get<
      AnalystAssignment[]
    >('https://socially-advantaged-moth.cloudpub.ru/user/filials/with-analyst')
    .then((r) => r.data);
