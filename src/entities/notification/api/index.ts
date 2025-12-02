import { api } from '@/shared/api/base';
import type { Notification } from '../model/types';

export const getNotifications = () =>
  api.get<Notification[]>('/notifications').then((r) => r.data);

export const markAsRead = (id: string | number) =>
  api.patch<Notification>(`/notifications/${id}`, {
    isRead: true,
  });
