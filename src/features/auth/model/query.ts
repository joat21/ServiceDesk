import { useMutation } from '@tanstack/react-query';
import { loginRequest } from '../api/auth.api';

const authKey = ['me'];

export const useLogin = () =>
  useMutation({
    mutationFn: loginRequest,
    mutationKey: authKey,
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
    },
  });
