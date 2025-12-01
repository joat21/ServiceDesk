import { Divider } from '@heroui/react';
import { PersonalInfoItem } from './PersonalInfoItem';
import { RoleLabel, useUser } from '@/entities/user';
import { Card } from '@/shared/ui';
import {
  UserIcon,
  EmailIcon,
  LocationIcon,
  DepartmentIcon,
  UserProfileAvatarIcon,
  MapPinIcon,
} from '@/shared/ui/icons';
import { BackToHomeButton } from '@/shared/routing/BackToHomeButton';

export const ProfilePage = () => {
  const { data: user, isLoading } = useUser();

  if (!user || isLoading) return 'Загрузка...';

  const { name, surname, systemId, email, department, office, role, region } =
    user;

  return (
    <div className="flex flex-col items-center gap-16 pt-16 max-w-5xl w-full">
      <h1 className="sr-only">Профиль</h1>
      <BackToHomeButton />
      <div className="flex justify-center items-stretch gap-20 max-w-[1050px] w-full">
        <Card className="gap-10 px-5 py-10 rounded-xl max-w-[330px] w-full flex-1">
          <div className="flex flex-col items-center gap-10">
            <UserProfileAvatarIcon />
            <div className="flex flex-col items-center gap-1">
              <span className="text-xl font-semibold">{`${name} ${surname}`}</span>
              <span>{RoleLabel[role]}</span>
            </div>
          </div>
          <Divider className="bg-[#DDE1E8]" />
          <div>
            <div className="flex justify-between w-full">
              <span>ID сотрудника</span>
              <span>{systemId}</span>
            </div>
          </div>
        </Card>
        <Card className="px-4 py-7 rounded-xl max-w-[330px] w-full flex-1">
          <div className="flex items-center gap-7 mb-7">
            <UserIcon />
            <h2 className="text-xl font-medium">Личная информация</h2>
          </div>
          <ul className="flex flex-col gap-6">
            <li>
              <PersonalInfoItem label="Email" value={email} icon={EmailIcon} />
            </li>
            <li>
              <PersonalInfoItem
                label="Местоположение"
                value={office[0]}
                icon={LocationIcon}
              />
            </li>
            <li>
              <PersonalInfoItem
                label="Отдел"
                value={department}
                icon={DepartmentIcon}
              />
            </li>
            <li>
              <PersonalInfoItem
                label="Регион"
                value={region}
                icon={MapPinIcon}
              />
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};
