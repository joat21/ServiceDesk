import type { FC } from 'react';
import {
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
  DropdownItem,
  DropdownSection,
  Avatar,
} from '@heroui/react';
import { DropdownArrowIcon, LogoutIcon, UserIcon } from '@/shared/ui/icons';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/shared/ui';

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
        <Button
          className="flex gap-4 items-center bg-transparent h-full"
          variant="light"
        >
          <div className="flex flex-col items-end">
            <span className="font-medium">{fullName}</span>
            <span className="text-[14px] text-[#666]">{department}</span>
          </div>
          <Avatar
            classNames={{
              base: 'border border-black w-[50px] h-[50px] bg-[#FCD9D9]',
              name: 'text-xl text-primary font-medium',
            }}
            name={fullName}
          />
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
