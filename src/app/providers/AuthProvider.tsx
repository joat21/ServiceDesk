import type { FC, PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthQuery } from '@/entities/user';
import { PageLoader } from '@/shared/ui';

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { data: user, isLoading, isError } = useAuthQuery();
  const location = useLocation();

  if (isLoading) return <PageLoader />;

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

  if (!user?.isExist && location.pathname !== '/onboarding') {
    return <Navigate to="/onboarding" replace />;
  }

  return <>{children}</>;
};
