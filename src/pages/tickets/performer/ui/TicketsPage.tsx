import { Tab, Tabs } from '@heroui/react';
import { Statistics } from './Statistics';
import { MyTicketsTable } from './MyTicketsTable';
import { AvailableTicketsTable } from './AvailableTicketsTable';
import { useTickets } from '@/features/tickets';
import { usePerformerStatistics } from '@/entities/statistics';
import { useUser } from '@/entities/user';
import { Card } from '@/shared/ui';

export const TicketsPage = () => {
  const { data: user, isLoading: isUserLoading } = useUser();

  const { data: stats, isLoading: isStatsLoading } = usePerformerStatistics(
    user?.id,
    {
      enabled: !!user,
    }
  );

  const { data: tickets, isLoading: isTicketsLoading } = useTickets();

  if (isUserLoading || isStatsLoading || isTicketsLoading) {
    return 'Загрузка...';
  }

  if (!stats) return 'Нет данных';

  return (
    <div className="flex flex-col items-center gap-11 pt-11 w-full">
      <h1 className="sr-only">Заявки</h1>
      <Statistics stats={stats} />
      <div className="flex w-full flex-col">
        <Tabs aria-label="Заявки">
          <Tab
            key="my-tickets"
            title={tickets ? `Мои заявки (${tickets.length})` : 'Мои заявки'}
          >
            <Card className="px-4 pt-6 pb-8 border border-[#c3c0c0] rounded-xl w-full">
              <h2 className="mb-7 text-2xl font-semibold">Мои заявки</h2>
              <MyTicketsTable tickets={tickets ?? []} />
            </Card>
          </Tab>
          <Tab
            key="available-tickets"
            title={
              tickets
                ? `Доступные заявки (${tickets.length})`
                : 'Доступные заявки'
            }
          >
            <Card className="px-4 pt-6 pb-8 border border-[#c3c0c0] rounded-xl w-full">
              <h2 className="mb-7 text-2xl font-semibold">Доступные заявки</h2>
              <AvailableTicketsTable tickets={tickets ?? []} />
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};
