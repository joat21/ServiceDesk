import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  DropdownSection,
} from '@heroui/react';
import type { FC } from 'react';
import { NotificationIcon } from '../../../shared/ui/icons';
import { NotificationsItem } from './NotificationsItem';

const items = [
  {
    id: 1,
    title: 'Просрочена',
    text: 'Заявка #[номер] [Тема] просрочена. Приносим извинения за задержку.',
  },
  {
    id: 2,
    title: 'Отклонена',
    text: 'Заявка #[номер] [Тема] отклонена.',
  },
  {
    id: 3,
    title: 'Принята в работу',
    text: 'Заявка #[номер] [Тема] принята в работу исполнителем.',
  },
  {
    id: 4,
    title: 'Выполнена',
    text: 'Заявка #[номер] [Тема] выполнена. Ознакомьтесь с результатом и оцените работу.',
  },
];

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
        <DropdownSection
          title="Уведомления"
          items={items}
          classNames={{
            base: 'flex flex-col gap-2.5 m-0',
            heading: 'text-secondary-foreground text-lg',
            group:
              'flex flex-col gap-2.5 pt-2.5! border-t-1 border-t-[#dde1e8]',
          }}
        >
          {(item) => (
            <DropdownItem key={item.id} className="p-0">
              <NotificationsItem title={item.title} text={item.text} />
            </DropdownItem>
          )}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
