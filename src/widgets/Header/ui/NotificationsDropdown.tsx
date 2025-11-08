import type { FC } from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from '@heroui/react';
import { useMarkAsRead, useNotifications } from '@/features/notifications';
import { NotificationsItem } from '@/entities/notification';
import { NotificationIcon } from '@/shared/ui/icons';
import { Button } from '@/shared/ui';

export const NotificationsDropdown: FC = () => {
  const { data: notifications } = useNotifications();
  const { mutate: markAsRead } = useMarkAsRead();

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
          className="p-0 rounded-full w-[60px] h-[60px] min-w-0 bg-[#fafafa]"
          variant="light"
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
              href={`/tickets/${notification.ticketId}`}
              onClick={() => markAsRead(notification.id)}
            >
              <NotificationsItem
                title={notification.title}
                text={notification.text}
                isReaded={notification.isReaded}
              />
            </DropdownItem>
          )}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
