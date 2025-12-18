import type { FC, PropsWithChildren } from 'react';
import { useAuthQuery } from '@/entities/user';

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isLoading, isError } = useAuthQuery();

  if (isLoading) return 'Загрузка...';

  if (isError) {
    const baseLoginUrl =
      'https://socially-advantaged-moth.cloudpub.ru/gateway/login';

    const redirectUrl = import.meta.env.DEV
      ? `${baseLoginUrl}?returnUrl=${encodeURIComponent(
          window.location.origin
        )}`
      : baseLoginUrl;

    window.location.replace(redirectUrl);

    return null;
  }

  return <>{children}</>;
};
