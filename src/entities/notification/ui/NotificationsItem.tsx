import type { FC } from 'react';
import { Card } from '@heroui/react';

type NotificationsItemProps = {
  title: string;
  text: string;
};

export const NotificationsItem: FC<NotificationsItemProps> = ({
  title,
  text,
}) => {
  return (
    <Card className="relative px-2.5 py-2 text-secondary-foreground bg-secondary shadow-none">
      <span className="text-lg">{title}</span>
      <span className="font-light">{text}</span>
      <span className="absolute w-1.5 h-1.5 right-3 top-3 rounded-full bg-primary" />
    </Card>
  );
};
