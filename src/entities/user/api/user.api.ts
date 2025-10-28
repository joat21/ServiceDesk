import type { User } from '../model/types';
import { api } from '@/shared/api/base';

export const getMe = () => api.get<User>('/auth_me').then((r) => r.data);
