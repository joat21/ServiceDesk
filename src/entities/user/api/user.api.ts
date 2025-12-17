import type { AuthUser, User } from '../model/types';
import { api } from '@/shared/api/base';

export const getMe = (userId: string) =>
  // TODO: возвращается массив, потом удалить
  api.get<User[]>(`/users?id=${userId}`).then((r) => r.data);

export const authMe = () =>
  api
    .get<AuthUser>('https://socially-advantaged-moth.cloudpub.ru/auth/me')
    .then((r) => r.data);
