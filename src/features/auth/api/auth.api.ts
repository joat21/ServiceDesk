import type { LoginRequest } from '../model/types';
import { api } from '@/shared/api/base';

export const loginRequest = (payload: LoginRequest) =>
  api.post<{ token: string }>('/auth', payload).then((r) => r.data);
