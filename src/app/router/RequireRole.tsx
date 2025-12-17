import { Navigate, Outlet } from 'react-router-dom';
import { useAuthUser, type Role } from '@/entities/user';

export const RequireRole = ({ roles }: { roles: Role[] }) => {
  const user = useAuthUser();

  if (!roles.includes(user.roleName)) return <Navigate to="/403" replace />;

  return <Outlet />;
};
