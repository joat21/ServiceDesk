import type { FC } from 'react';
import { Button, Dropdown, DropdownMenu, DropdownTrigger } from '@heroui/react';
import { NotificationsList } from '../../../features/notifications';
import { NotificationIcon } from '../../../shared/ui/icons';

export const NotificationsDropdown: FC = () => {
  return (
    <Dropdown
      placement="bottom-end"
      offset={30}
      classNames={{
        content: 'p-4 rounded-4xl translate-x-11',
      }}
    >
      <DropdownTrigger>
        <Button
          className="p-0 w-[60px] h-[60px] min-w-0 bg-[#fafafa]"
          radius="full"
        >
          <NotificationIcon />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        classNames={{
          base: 'p-0 max-w-96',
          list: 'gap-2.5 bg-transparent',
        }}
      >
        <NotificationsList />
      </DropdownMenu>
    </Dropdown>
  );
};
