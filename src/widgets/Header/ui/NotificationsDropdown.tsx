import { type FC } from 'react';
import {
  Badge,
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

  // TODO: не самое оптимальное решение, подумать как улучшить
  // идеальный вариант - считать на бэке
  const unreadCount = notifications?.filter((n) => !n.isRead).length;

  return (
    <Dropdown
      placement="bottom-end"
      offset={25}
      classNames={{
        content: 'p-4 rounded-xl border border-[#c3c0c0] translate-x-11',
      }}
    >
      <Badge color="primary" content={unreadCount} showOutline={false}>
        <DropdownTrigger>
          <Button
            className="p-0 border border-black rounded-full w-[40px] h-[40px] min-w-0 bg-[#fafafa]"
            variant="light"
          >
            <NotificationIcon />
          </Button>
        </DropdownTrigger>
      </Badge>

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
            group: 'flex flex-col gap-2.5 pt-2.5! border-t border-[#dde1e8]',
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
              <NotificationsItem {...notification} />
            </DropdownItem>
          )}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
