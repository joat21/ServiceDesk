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
} from '../../../shared/ui/icons';

export const UserDropdown: FC = () => {
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
            <span className="text-xl font-medium">Борис Иванов</span>
            <span className="text-[#666]">Маркетинг</span>
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
          >
            Выйти
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
