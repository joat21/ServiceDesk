import { Navigate } from 'react-router-dom';
import { useUser } from '@/entities/user';
import { START_ROUTE_BY_ROLE } from './startRoutes';

export const RedirectByRole = () => {
  const { data: user } = useUser();

  if (!user) return <Navigate to="/sign-in" replace />;

  const target = START_ROUTE_BY_ROLE[user.role];

  return <Navigate to={target} replace />;
};
