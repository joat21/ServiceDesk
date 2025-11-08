import type { FC } from 'react';
import { Role, useUser } from '@/entities/user';
import { EmployeeProfilePage } from './employee';
import { PerformerProfilePage } from './performer';

export const ProfilePage: FC = () => {
  const { data: user } = useUser();

  if (user?.role === Role.Employee) {
    return <EmployeeProfilePage />;
  }

  if (user?.role === Role.Performer) {
    return <PerformerProfilePage />;
  }

  return null;
};
