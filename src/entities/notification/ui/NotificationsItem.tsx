import type { FC } from 'react';
import type { Notification } from '../model/types';
import { Card } from '@/shared/ui';
import { formatDateTime } from '@/shared/lib/dateTime';
import { cn } from '@heroui/react';

export const NotificationsItem: FC<Notification> = ({
  title,
  text,
  isRead,
  createdAt,
}) => {
  return (
    <Card
      className={cn(
        'relative gap-1 px-2.5 py-2 rounded-lg border-none text-base text-secondary-foreground bg-secondary shadow-none',
        'transition-colors hover:bg-secondary/80'
      )}
    >
      <span className="font-medium">{title}</span>
      <span className="font-light">{text}</span>
      {!isRead && (
        <span className="absolute w-1.5 h-1.5 right-3 top-3 rounded-full bg-primary" />
      )}
      <span className="text-[#666]">
        {formatDateTime(createdAt, 'numeric')}
      </span>
    </Card>
  );
};
