import { Link } from '@heroui/react';
import type { FC } from 'react';
import { TicketsTable } from './TicketsTable';

export const TicketsPage: FC = () => {
  return (
    <div className="flex flex-col items-center pt-11 w-full">
      <div className="flex justify-between w-full">
        <h1>Мои заявки</h1>
        <Link href="/create-ticket">+ Создать заявку</Link>
      </div>
      <TicketsTable />
    </div>
  );
};
