import { useState, type FC } from 'react';
import { Link } from '@heroui/react';
import { TicketsTable } from './TicketsTable';
import { usePriorities } from '@/entities/priority';
import { useStatuses } from '@/entities/status';
import { type TicketsFilter, useTickets } from '@/entities/ticket';
import { useAuthUser } from '@/entities/user';
import { Button, Card, TicketsFilters } from '@/shared/ui';

export const TicketsPage: FC = () => {
  const [filters, setFilters] = useState<TicketsFilter>({
    search: '',
    priorityId: null,
    statusId: null,
    dueAt: null,
  });

  const user = useAuthUser();
  const { data: tickets, isFetching } = useTickets(filters);
  const { data: priorities } = usePriorities();
  const { data: statuses } = useStatuses();

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
          statuses={statuses}
          filters={filters}
          setFilters={setFilters}
        />
        <TicketsTable tickets={tickets?.content} isLoading={isFetching} />
      </Card>
    </div>
  );
};
