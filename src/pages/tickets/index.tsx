import type { FC } from 'react';
import { Role, useAuthUser } from '@/entities/user';
import { EmployeeTicketsPage } from './employee';
import { PerformerTicketsPage } from './performer';
import { AdminTicketsPage } from './admin';

export const TicketsPage: FC = () => {
  const user = useAuthUser();

  if (user.roleName === Role.Employee) {
    return <EmployeeTicketsPage />;
  }

  if (user.roleName === Role.Performer) {
    return <PerformerTicketsPage />;
  }

  if (user.roleName === Role.Admin) {
    return <AdminTicketsPage />;
  }

  return null;
};
