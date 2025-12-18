import type { FC } from 'react';
import { Role, useAuthUser, useUser } from '@/entities/user';
import { EmployeeProfilePage } from './employee';
import { PerformerProfilePage } from './performer';

export const ProfilePage: FC = () => {
  const { roleName } = useAuthUser();
  const { data: user, isLoading } = useUser();

  if (isLoading) return 'Загрузка...';
  if (!user) return 'Пользователь не найден';

  if (roleName === Role.Employee) {
    return <EmployeeProfilePage user={user} />;
  }

  if (roleName === Role.Performer) {
    return <PerformerProfilePage user={user} />;
  }

  return null;
};
