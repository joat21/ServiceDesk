import type { FC } from 'react';
import {
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
  Button,
  DropdownSection,
} from '@heroui/react';
import {
  DropdownArrowIcon,
  LogoutIcon,
  UserHeaderAvatarIcon,
  UserIcon,
} from '@/shared/ui/icons';
import { useNavigate } from 'react-router-dom';

interface UserDropdownProps {
  fullName: string;
  department: string;
}

export const UserDropdown: FC<UserDropdownProps> = ({
  fullName,
  department,
}) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/sign-in', { replace: true });
  };

  return (
    <Dropdown
      placement="bottom-end"
      offset={25}
      classNames={{
        content: 'rounded-2xl min-w-44 text-base -translate-x-7',
      }}
    >
      <DropdownTrigger>
        <Button className="flex gap-4 items-center h-full" variant="light">
          <div className="flex flex-col items-end">
            <span className="text-xl font-medium">{fullName}</span>
            <span className="text-[#666]">{department}</span>
          </div>
          <UserHeaderAvatarIcon className="max-w-none!" />
          <DropdownArrowIcon />
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownSection showDivider>
          <DropdownItem
            key="profile"
            href="/profile"
            startContent={<UserIcon width={24} height={24} />}
            classNames={{
              base: 'py-1',
              title: 'text-secondary-foreground text-base',
            }}
          >
            Профиль
          </DropdownItem>
        </DropdownSection>
        <DropdownSection className="mb-0">
          <DropdownItem
            key="logout"
            classNames={{
              base: 'py-1',
              title: 'text-base',
            }}
            className="text-[#e24444]"
            color="danger"
            startContent={<LogoutIcon />}
            onClick={handleLogout}
          >
            Выйти
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
