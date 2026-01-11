import { api } from '@/shared/api/base';

export const editAdminAssignment = (payload: {
  userId: string;
  regionId: number;
}) =>
  api.post<{
    userId: string;
    regionId: number;
  }>(
    'https://socially-advantaged-moth.cloudpub.ru/user/adminAppointment',
    payload
  );
