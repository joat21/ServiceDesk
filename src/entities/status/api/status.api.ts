import type { Status } from '../model/types';
import { api } from '@/shared/api/base';

export const getStatuses = () =>
  api
    .get<Status[]>('https://2f19a16913d49d8a.mokky.dev/statuses')
    .then((r) => r.data);
