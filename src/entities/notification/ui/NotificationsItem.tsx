import { Card } from '@/shared/ui';
import type { FC } from 'react';

type NotificationsItemProps = {
  title: string;
  text: string;
  isReaded: boolean;
};

export const NotificationsItem: FC<NotificationsItemProps> = ({
  title,
  text,
  isReaded,
}) => {
  return (
    <Card className="relative px-2.5 py-2 rounded-lg border-none text-secondary-foreground bg-secondary shadow-none">
      <span className="text-lg">{title}</span>
      <span className="font-light">{text}</span>
      {!isReaded && (
        <span className="absolute w-1.5 h-1.5 right-3 top-3 rounded-full bg-primary" />
      )}
    </Card>
  );
};
