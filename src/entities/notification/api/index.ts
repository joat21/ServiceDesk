import { api } from '@/shared/api/base';

export const getNotifications = () =>
  api.get('/notifications').then((r) => r.data);
