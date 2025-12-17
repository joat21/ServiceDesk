import { useQuery, useQueryClient } from '@tanstack/react-query';
import type { AuthUser, User } from './types';
import { authMe, getMe } from '../api/user.api';

export const useUser = (userId: string) =>
  // TODO: возвращается массив, потом удалить
  useQuery<User[]>({
    queryKey: ['user', userId],
    queryFn: () => getMe(userId),
  });

export const useAuthQuery = () =>
  useQuery<AuthUser>({
    queryKey: ['auth', 'me'],
    queryFn: authMe,
    retry: false,
    staleTime: 5 * 60 * 1000,
  });

export const useAuthUser = () => {
  const qc = useQueryClient();
  const user = qc.getQueryData<AuthUser>(['auth', 'me']);

  if (!user) {
    throw new Error('useAuthUser used outside of AuthProvider');
  }

  return user;
};
