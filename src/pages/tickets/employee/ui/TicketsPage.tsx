import { useState, type FC } from 'react';
import { Link } from '@heroui/react';

import { TicketsFilters } from './TicketsFilters';
import { TicketsTable } from './TicketsTable';

import { useTickets } from '@/features/tickets';

import { usePriorities } from '@/entities/priority';
import type { TicketsFilter } from '@/entities/ticket';
import { useAuthUser } from '@/entities/user';

import { Button, Card } from '@/shared/ui';

export const TicketsPage: FC = () => {
  const [filters, setFilters] = useState<TicketsFilter>({
    search: '',
    priorityId: null,
    statusId: null,
    deadline: null,
  });

  const user = useAuthUser();
  const { data: tickets } = useTickets(filters);
  const { data: priorities } = usePriorities();

  return (
    <div className="flex flex-col items-center gap-11 pt-11 w-full">
      <div className="flex justify-between items-center w-full">
        <p className="text-2xl font-semibold">
          Добро пожаловать, {user.name} {user.surname}
        </p>
        <Button className="h-8" as={Link} href="/create-ticket">
          + Создать заявку
        </Button>
      </div>
      <Card className="px-4 pt-6 pb-8 border border-[#c3c0c0] rounded-xl w-full">
        <h1 className="mb-7 text-2xl font-semibold">История заявок</h1>
        <TicketsFilters
          priorities={priorities}
          filters={filters}
          setFilters={setFilters}
        />
        <TicketsTable tickets={tickets ?? []} />
      </Card>
    </div>
  );
};
