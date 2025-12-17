import type { FC } from 'react';
import { Role, useAuthUser, useUser } from '@/entities/user';
import { EmployeeProfilePage } from './employee';
import { PerformerProfilePage } from './performer';

export const ProfilePage: FC = () => {
  const { userId, roleName } = useAuthUser();
  const { data: user, isLoading } = useUser(userId);

  if (isLoading) return 'Загрузка...';
  if (!user || !user[0]) return 'Пользователь не найден';

  if (roleName === Role.Employee) {
    return <EmployeeProfilePage user={user[0]} />;
  }

  if (roleName === Role.Performer) {
    return <PerformerProfilePage user={user[0]} />;
  }

  return null;
};
