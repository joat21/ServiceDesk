import type { FC } from 'react';
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from '@heroui/react';
import { useNotifications } from '@/features/notifications';
import { NotificationsItem } from '@/entities/notification';
import { NotificationIcon } from '@/shared/ui/icons';

export const NotificationsDropdown: FC = () => {
  const { notifications } = useNotifications();

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
        <DropdownSection
          title="Уведомления"
          items={notifications}
          classNames={{
            base: 'flex flex-col gap-2.5 m-0',
            heading: 'text-secondary-foreground text-lg',
            group:
              'flex flex-col gap-2.5 pt-2.5! border-t-1 border-t-[#dde1e8]',
          }}
        >
          {(notification) => (
            <DropdownItem
              key={notification.id}
              className="p-0"
              textValue={notification.title}
            >
              <NotificationsItem
                title={notification.title}
                text={notification.text}
              />
            </DropdownItem>
          )}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
