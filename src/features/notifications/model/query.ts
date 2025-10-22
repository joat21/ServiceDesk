import { useQuery } from '@tanstack/react-query';
import { getNotifications, type Notification } from '@/entities/notification';

export const useNotifications = () =>
  useQuery<Notification[]>({
    queryKey: ['notifications'],
    queryFn: getNotifications,
    refetchInterval: 1000 * 60,
  });
