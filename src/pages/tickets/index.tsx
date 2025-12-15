import type { FC } from 'react';
import { Role, useUser } from '@/entities/user';
import { EmployeeTicketsPage } from './employee';
import { PerformerTicketsPage } from './performer';

export const TicketsPage: FC = () => {
  const { data: user } = useUser();

  if (user?.role === Role.Employee) {
    return <EmployeeTicketsPage />;
  }

  if (user?.role === Role.Performer) {
    return <PerformerTicketsPage />;
  }

  if (user?.role === Role.Admin) {
    return <h1>Управление заявками у админа</h1>;
  }

  return null;
};
