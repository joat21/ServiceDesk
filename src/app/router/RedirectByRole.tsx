import { Navigate } from 'react-router-dom';
import { useAuthUser } from '@/entities/user';
import { START_ROUTE_BY_ROLE } from './startRoutes';

export const RedirectByRole = () => {
  const user = useAuthUser();
  const target = START_ROUTE_BY_ROLE[user.roleName];

  return <Navigate to={target} replace />;
};
