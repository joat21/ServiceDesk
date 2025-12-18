import type { FC } from 'react';
import { Divider } from '@heroui/react';
import { PersonalInfoItem } from './PersonalInfoItem';
import { ROLE_LABEl, type User } from '@/entities/user';
import { Card } from '@/shared/ui';
import {
  UserIcon,
  EmailIcon,
  LocationIcon,
  UserProfileAvatarIcon,
  MapPinIcon,
} from '@/shared/ui/icons';
import { BackToHomeButton } from '@/shared/routing/BackToHomeButton';

interface ProfilePageProps {
  user: User;
}

export const ProfilePage: FC<ProfilePageProps> = ({ user }) => {
  return (
    <div className="flex flex-col gap-16 pt-16 max-w-5xl w-full">
      <h1 className="sr-only">Профиль</h1>
      <BackToHomeButton />
      <div className="flex justify-center gap-20 max-w-[1050px] w-full">
        <Card className="gap-6 px-5 py-6 rounded-xl max-w-[330px] w-full">
          <div className="flex flex-col items-center gap-4">
            <UserProfileAvatarIcon width={150} height={150} />
            <div className="flex flex-col items-center gap-1">
              <span className="text-xl font-semibold">{`${user.name} ${user.surname}`}</span>
              <span>{ROLE_LABEl[user.roleName]}</span>
            </div>
          </div>
          <Divider className="bg-[#DDE1E8]" />
          <div>
            <div className="flex justify-between w-full">
              <span>ID сотрудника</span>
              <span>{user.systemId}</span>
            </div>
          </div>
        </Card>
        <Card className="px-4 py-7 rounded-xl max-w-[330px] w-full">
          <div className="flex items-center gap-7 mb-7">
            <UserIcon />
            <h2 className="text-xl font-medium">Личная информация</h2>
          </div>
          <ul className="flex flex-col gap-6">
            <li>
              <PersonalInfoItem
                label="Email"
                value={user.email}
                icon={EmailIcon}
              />
            </li>
            <li>
              <PersonalInfoItem
                label="Местоположение"
                value={user.office[0]}
                icon={LocationIcon}
              />
            </li>
            <li>
              <PersonalInfoItem
                label="Регион"
                value={user.region}
                icon={MapPinIcon}
              />
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};
