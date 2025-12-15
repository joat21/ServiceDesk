import { Navigate, Outlet } from 'react-router-dom';
import { useUser, type Role } from '@/entities/user';

export const RequireRole = ({ roles }: { roles: Role[] }) => {
  const { data: user } = useUser();

  if (!user) return <Navigate to="/sign-in" replace />;

  if (!roles.includes(user.role)) return <Navigate to="/403" replace />;

  return <Outlet />;
};
