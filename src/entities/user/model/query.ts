import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import type {
  AuthUser,
  RegisterRequest,
  SearchUserParams,
  User,
} from './types';
import { authMe, getMe, register, searchUsers } from '../api/user.api';

export const useUser = () =>
  useQuery<User>({
    queryKey: ['user'],
    queryFn: getMe,
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

export const useSearchUser = (
  params?: SearchUserParams,
  enabled: boolean = false
) =>
  useQuery({
    queryKey: [
      'users',
      'search',
      params?.regionId,
      params?.filialId,
      params?.fullname,
    ],
    queryFn: () => searchUsers(params),
    enabled:
      enabled ||
      Boolean(params?.regionId) ||
      Boolean(params?.filialId) ||
      Boolean(params?.fullname),
  });

export const useRegisterUser = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (payload: RegisterRequest) => register(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['auth', 'me'] }),
  });
};
