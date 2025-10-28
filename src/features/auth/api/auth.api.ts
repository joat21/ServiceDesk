import { api } from '@/shared/api/base';

export const loginRequest = (payload: { email: string; password: string }) =>
  api.post<{ token: string }>('/auth', payload).then((r) => r.data);
