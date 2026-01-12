import { api } from '@/shared/api/base';

export interface CreatePerformerArgs {
  userId: string;
  categoryIds: string[];
  officesIds: string[];
}

export const createPerformer = (payload: CreatePerformerArgs) =>
  api.post(
    'https://socially-advantaged-moth.cloudpub.ru/user/performerAppointment',
    payload
  );
