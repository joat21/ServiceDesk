import { useQuery } from '@tanstack/react-query';
import type { User } from './types';
import { getMe } from '../api/user.api';

const userKey = ['user'];

export const useUser = (enabled?: boolean) =>
  useQuery<User>({
    queryKey: userKey,
    queryFn: getMe,
    enabled,
  });
