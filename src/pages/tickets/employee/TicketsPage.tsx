import { Link } from '@heroui/react';
import type { FC } from 'react';

export const TicketsPage: FC = () => {
  return (
    <div className="flex justify-between items-start pt-11 max-w-[500px] w-full">
      <h1>Мои заявки</h1>
      <Link href="/create-ticket">+ Создать заявку</Link>
    </div>
  );
};
