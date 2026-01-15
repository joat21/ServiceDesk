import { Statistics } from './Statistics';
import { TicketsTable } from './TicketsTable';
import { usePerformerStatistics } from '@/entities/statistics';
import { useTickets } from '@/entities/ticket';
import { useAuthUser } from '@/entities/user';
import { Card, PageLoader } from '@/shared/ui';

export const TicketsPage = () => {
  const { userId } = useAuthUser();

  const { data: stats, isLoading: isStatsLoading } =
    usePerformerStatistics(userId);
  const {
    data: tickets,
    isLoading: isTicketsLoading,
    isFetching,
  } = useTickets();

  if (isStatsLoading || isTicketsLoading) {
    return <PageLoader />;
  }

  return (
    <div className="flex flex-col items-center gap-11 pt-11 w-full">
      <h1 className="sr-only">Заявки</h1>
      {stats && <Statistics stats={stats[0]} />}
      <Card className="px-4 pt-6 pb-8 border border-[#c3c0c0] rounded-xl w-full">
        <h2 className="mb-7 text-2xl font-semibold">Мои заявки</h2>
        <TicketsTable tickets={tickets} isLoading={isFetching} />
      </Card>
    </div>
  );
};
