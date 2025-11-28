import type { FC } from 'react';
import { Divider } from '@heroui/react';
import { PersonalInfoItem } from './PersonalInfoItem';
import { RoleLabel, type User } from '@/entities/user';
import { Card } from '@/shared/ui';
import {
  DepartmentIcon,
  EmailIcon,
  LocationIcon,
  UserProfileAvatarIcon,
} from '@/shared/ui/icons';

interface PersonalInfoProps {
  user: User;
}

export const PersonalInfo: FC<PersonalInfoProps> = ({ user }) => {
  return (
    <Card className="flex-row justify-between gap-10 p-4 rounded-xl">
      <h2 className="sr-only">Личная информация</h2>
      <div className="flex flex-col items-center gap-5 w-full">
        <UserProfileAvatarIcon width={105} height={105} />
        <div className="flex flex-col items-center gap-1">
          <span className="text-xl font-semibold">{`${user.name} ${user.surname}`}</span>
          <span>{RoleLabel[user.role]}</span>
        </div>
        <Divider />
        <div className="flex justify-between w-full">
          <span>ID сотрудника</span>
          <span>{user.systemId}</span>
        </div>
      </div>
      <ul className="flex flex-col justify-between w-full">
        <li>
          <PersonalInfoItem
            label="Отдел"
            value={user.department}
            icon={DepartmentIcon}
          />
        </li>
        <li>
          <PersonalInfoItem
            label="Регион"
            value={user.region}
            icon={LocationIcon}
          />
        </li>
        <li>
          <PersonalInfoItem label="Email" value={user.email} icon={EmailIcon} />
        </li>
      </ul>
    </Card>
  );
};
