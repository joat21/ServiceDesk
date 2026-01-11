import { api } from '@/shared/api/base';

export const editAnalystAssignment = (payload: {
  userId: string;
  filialId: number;
}) =>
  api.post<{
    userId: string;
    filialId: number;
  }>(
    'https://socially-advantaged-moth.cloudpub.ru/user/analystAppointment',
    payload
  );
