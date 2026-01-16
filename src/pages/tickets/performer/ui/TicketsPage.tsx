import { useState } from 'react';
import { Pagination } from '@heroui/react';
import { Statistics } from './Statistics';
import { TicketsTable } from './TicketsTable';
import { usePriorities } from '@/entities/priority';
import { usePerformerStatistics } from '@/entities/statistics';
import { useStatuses } from '@/entities/status';
import { useTickets, type TicketsFilter } from '@/entities/ticket';
import { Card, PageLoader, TicketsFilters } from '@/shared/ui';

export const TicketsPage = () => {
  const [filters, setFilters] = useState<TicketsFilter>({
    search: '',
    priorityId: null,
    statusId: null,
    dueAt: null,
    page: 1,
  });

  const { data: stats, isLoading: isStatsLoading } = usePerformerStatistics();
  const { data: tickets, isFetching } = useTickets(filters);
  const { data: priorities } = usePriorities();
  const { data: statuses } = useStatuses();

  if (isStatsLoading) {
    return <PageLoader />;
  }

  return (
    <div className="flex flex-col items-center gap-11 pt-11 w-full">
      <h1 className="sr-only">Заявки</h1>
      {stats && <Statistics stats={stats} />}
      <Card className="px-4 pt-6 pb-8 border border-[#c3c0c0] rounded-xl w-full">
        <h2 className="mb-7 text-2xl font-semibold">Мои заявки</h2>
        <TicketsFilters
          priorities={priorities}
          statuses={statuses}
          filters={filters}
          setFilters={setFilters}
        />
        <TicketsTable tickets={tickets?.content} isLoading={isFetching} />
        <Pagination
          className="self-end"
          showControls
          page={filters.page}
          total={tickets?.pagination.totalPages ?? 1}
          onChange={(page) => setFilters((prev) => ({ ...prev, page }))}
        />
      </Card>
    </div>
  );
};
