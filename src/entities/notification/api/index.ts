import { api } from '@/shared/api/base';
import type { Notification } from '../model/types';

export const getNotifications = () =>
  api.get<Notification[]>('/notifications').then((r) => r.data);

// id временно тип number
export const markAsRead = (id: number) =>
  api.patch<Notification>(`/notifications/${id}`, {
    isReaded: true,
  });
