import type { FC } from 'react';
import { Card, Divider } from '@heroui/react';
import { PersonalInfoItem } from './PersonalInfoItem';
import { RoleLabel, useUser } from '@/entities/user';
import {
  DepartmentIcon,
  EmailIcon,
  LocationIcon,
  UserProfileAvatarIcon,
} from '@/shared/ui/icons';

export const ProfilePage: FC = () => {
  const { data: user, isLoading } = useUser();

  if (!user || isLoading) return 'Загрузка...';

  const {
    name,
    surname,
    systemId,
    email,
    department,
    region,
    office,
    role,
    rating,
    categories,
  } = user;

  return (
    <div className="flex justify-center items-center w-full">
      <div className="grid grid-cols-2 items-start gap-12 w-full">
        <Card className="flex-row justify-between gap-6 p-4 rounded-xl max-w-[650px] w-full">
          <div className="flex flex-col items-center gap-2 w-full">
            <UserProfileAvatarIcon />
            <div className="flex flex-col items-center gap-1">
              <span className="text-xl font-semibold">{`${name} ${surname}`}</span>
              <span>{RoleLabel[role]}</span>
            </div>
            <Divider />
            <div className="flex justify-between w-full">
              <span>ID сотрудника</span>
              <span>{systemId}</span>
            </div>
          </div>
          <ul className="flex flex-col justify-between w-full">
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
                icon={LocationIcon}
              />
            </li>
            <li>
              <PersonalInfoItem label="Email" value={email} icon={EmailIcon} />
            </li>
          </ul>
        </Card>
        <Card className="p-4 rounded-xl h-full">
          <h2 className="text-xl font-medium">Офисы для выполнения заявок</h2>
          <ul>
            {office.map((office) => (
              <li key={office}>{office}</li>
            ))}
          </ul>
        </Card>
        <Card className="p-4 rounded-xl">
          <h2 className="text-xl font-medium">Категории заявок</h2>
          <ul className="flex justify-between">
            {categories?.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </Card>
        <Card className="p-4 rounded-xl">
          <h2 className="text-xl font-medium">Рейтинг {rating}</h2>
          <span>На основе N заявок</span>
        </Card>
      </div>
    </div>
  );
};
