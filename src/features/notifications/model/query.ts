import {
  useMutation,
  useQuery,
  useQueryClient,
  type UseQueryOptions,
} from '@tanstack/react-query';
import {
  getNotifications,
  markAsRead,
  type Notification,
} from '@/entities/notification';

const notificationsKey = ['notifications'];

export const useNotifications = (
  options?: Partial<UseQueryOptions<Notification[]>>
) =>
  useQuery<Notification[]>({
    queryKey: notificationsKey,
    queryFn: getNotifications,
    refetchInterval: 1000 * 60,
    ...options,
  });

export const useMarkAsRead = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (id: string | number) => markAsRead(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: notificationsKey }),
  });
};
