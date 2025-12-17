import type { FC, PropsWithChildren } from 'react';
import { useAuthQuery } from '@/entities/user';

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isLoading, isError } = useAuthQuery();

  if (isLoading) return 'Загрузка...';
  if (isError) {
    window.location.replace(
      'https://socially-advantaged-moth.cloudpub.ru/gateway/login?returnUrl=http://localhost:5173'
    );
    return null;
  }

  return <>{children}</>;
};
