import { Card, CardBody, CardFooter, CardHeader, Divider } from '@heroui/react';
import {
  UserIcon,
  EmailIcon,
  LocationIcon,
  DepartmentIcon,
  UserProfileAvatarIcon,
} from '../../../shared/ui/icons';
import { PersonalInfoItem } from './PersonalInfoItem';

export const ProfilePage = () => {
  return (
    <div className="flex justify-between items-center gap-20 max-w-[1050px] w-full">
      <Card className="gap-10 px-5 py-10 rounded-4xl max-w-[330px] w-full">
        <CardBody className="items-center gap-10 p-0">
          <UserProfileAvatarIcon />
          <div className="flex flex-col items-center gap-1">
            <span className="text-xl font-semibold">Борис Иванов</span>
            <span>Сотрудник</span>
          </div>
        </CardBody>
        <Divider />
        <CardFooter className="p-0">
          <div className="flex justify-between w-full">
            <span>ID сотрудника</span>
            <span>EMP-0004</span>
          </div>
        </CardFooter>
      </Card>
      <Card className="px-6 py-7 rounded-4xl w-full max-h-fit">
        <CardHeader className="mb-7 p-0">
          <div className="flex items-center gap-5">
            <UserIcon />
            <span className="text-xl font-medium">Личная информация</span>
          </div>
        </CardHeader>
        <CardBody as="ul" className="grid grid-cols-2 gap-x-3 gap-y-8 p-0">
          <li>
            <PersonalInfoItem
              label="Email"
              value="ivanov@company.com"
              icon={EmailIcon}
            />
          </li>
          <li>
            <PersonalInfoItem
              label="Местоположение"
              value="Екатеринбург, Генеральская 8"
              icon={LocationIcon}
            />
          </li>
          <li>
            <PersonalInfoItem
              label="Отдел"
              value="Маркетинг"
              icon={DepartmentIcon}
            />
          </li>
          <li>
            <PersonalInfoItem label="Роль" value="Сотрудник" icon={UserIcon} />
          </li>
        </CardBody>
      </Card>
    </div>
  );
};
