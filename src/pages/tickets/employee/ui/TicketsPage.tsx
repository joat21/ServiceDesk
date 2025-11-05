import type { FC } from 'react';
import { Link } from '@heroui/react';
import { TicketsTable } from './TicketsTable';
import { useTickets } from '@/features/tickets';

export const TicketsPage: FC = () => {
  const { data: tickets } = useTickets();

  return (
    <div className="flex flex-col items-center pt-11 w-full">
      <div className="flex justify-between w-full">
        <h1>Мои заявки</h1>
        <Link href="/create-ticket">+ Создать заявку</Link>
      </div>
      <TicketsTable tickets={tickets ?? []} />
    </div>
  );
};
