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
  UserHeaderAvatarIcon,
} from '../../../shared/ui/icons';

export const UserDropdown: FC = () => {
  return (
    <Dropdown
      classNames={{
        content: 'text-base! rounded-2xl',
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
          <DropdownItem key="profile" href="/profile">
            Профиль
          </DropdownItem>
        </DropdownSection>
        <DropdownSection className="mb-0">
          <DropdownItem key="logout">Выйти</DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
