import type {
  AuthUser,
  RegisterRequest,
  SearchedUser,
  SearchUserParams,
  User,
} from '../model/types';
import { api } from '@/shared/api/base';

export const getMe = () =>
  api
    .get<User>('https://socially-advantaged-moth.cloudpub.ru/user/getUserInfo')
    .then((r) => r.data);

export const authMe = () =>
  api
    .get<AuthUser>('https://socially-advantaged-moth.cloudpub.ru/auth/me')
    .then((r) => r.data);

export const searchUsers = async (params?: SearchUserParams) => {
  const { data } = await api.get<SearchedUser[]>(
    'https://socially-advantaged-moth.cloudpub.ru/user/searchUser',
    { params }
  );

  return data;
};

export const register = (payload: RegisterRequest) =>
  api.post(
    'https://socially-advantaged-moth.cloudpub.ru/auth/registration',
    payload
  );
