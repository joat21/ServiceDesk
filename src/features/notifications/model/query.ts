import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getNotifications,
  markAsRead,
  type Notification,
} from '@/entities/notification';

const notificationsKey = ['notifications'];

export const useNotifications = () =>
  useQuery<Notification[]>({
    queryKey: notificationsKey,
    queryFn: getNotifications,
    refetchInterval: 1000 * 60,
  });

export const useMarkAsRead = () => {
  const qc = useQueryClient();

  return useMutation({
    // id временно тип number
    mutationFn: (id: number) => markAsRead(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: notificationsKey }),
  });
};
