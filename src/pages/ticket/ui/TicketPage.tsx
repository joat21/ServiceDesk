import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Details } from './Details';
import { History } from './History';
import { useTicket } from '@/features/tickets';
import { useTicketHistory } from '@/entities/ticket';

export const TicketPage: FC = () => {
  const { id = '' } = useParams();

  const { data: ticket, isLoading: isTicketLoading } = useTicket(Number(id));
  const { data: history } = useTicketHistory(id);

  if (!ticket || isTicketLoading) return 'Загрузка...';

  return (
    <div className="relative flex items-start gap-5 py-14 w-full">
      <Details ticket={ticket} />
      <History history={history ?? []} />
    </div>
  );
};
